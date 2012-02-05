# coding: utf-8

require 'csv'

class ReykjavikBudgetVoteCounting
  attr_reader :construction_priority_ids_count, :maintenance_priority_ids_count

  def initialize(private_key_file)
    @construction_priority_ids_count = Hash.new
    @maintenance_priority_ids_count = Hash.new
    @construction_priority_ids_selected_count = Hash.new
    @maintenance_priority_ids_selected_count = Hash.new
    @private_key_file = private_key_file
    @ballot = ReykjavikBudgetBallot.new
  end

  def count_unique_votes(csv_out=true,neighborhood_id)
    @neighborhood_id = neighborhood_id

    Vote.all_latest_votes_by_distinct_voters(neighborhood_id).each do |vote|
      process_vote(vote)
    end

    select_top_priorities_that_still_fit_budget

    if csv_out
      filename = write_voting_results_report
      write_audit_report
    end

    filename
  end

  def count_all_votes
    Vote.find(:all,:select=>"user_id_hash, payload_data", :order=>"created_at").each do |vote|
      process_vote(vote)
    end
  end

  def count_all_test_votes(test_votes,neighborhood_id=nil)
    @neighborhood_id = neighborhood_id
    test_votes.each do |vote|
      decrypted_vote = ReykjavikBudgetVote.new(vote,@private_key_file)
      decrypted_vote.unpack_without_encryption
      add_votes(decrypted_vote)
    end
    select_top_priorities_that_still_fit_budget if neighborhood_id
  end


  def write_voting_results_report(filename="voting_results.csv")
    filename = "#{@neighborhood_id}_#{get_time_for_filename}_#{filename}"
    CSV.open(Rails.root.join("results",filename),"wb") do |csv|
      csv << ["Niðurstöður kosninga"]
      csv << [""]
      csv << ["Hverfi"]
      csv << ["Id","Nafn","Fjármagn"]
      csv << [@neighborhood_id,@ballot.get_neighborhood_name(@neighborhood_id),@ballot.get_neighborhood_budget(@neighborhood_id)]
      csv << [""]
      csv << ["Heildaratkvæði fyrir Nýframkvæmdir"]
      add_priorities_to_csv(@construction_priority_ids_count,csv)
      csv << [""]
      csv << ["Heildaratkvæði fyrir Viðhaldsverkefni"]
      add_priorities_to_csv(@maintenance_priority_ids_count,csv)
      csv << [""]
      csv << ["Valin verkefni fyrir Nýframkvæmdir"]
      add_priorities_to_csv(@construction_priority_ids_selected_count,csv)
      csv << [""]
      csv << ["Valin verkefni fyrir Viðhaldsverkefni"]
      add_priorities_to_csv(@maintenance_priority_ids_selected_count,csv)
    end
    filename
  end

  private

  def select_top_priorities_that_still_fit_budget
    @construction_priority_ids_selected_count = select_top_priorities(@construction_priority_ids_count)
    @maintenance_priority_ids_selected_count = select_top_priorities(@maintenance_priority_ids_count)
  end

  def select_top_priorities(priority_ids)
    total_budget = @ballot.get_neighborhood_budget(@neighborhood_id)
    left_of_budget = total_budget
    selected = Hash.new
    priority_ids.sort_by{|p| [-p[1], p[0]]}.each do |priority_id,vote_count|
      priority_price = @ballot.get_priority_price(priority_id)
      if priority_price<=left_of_budget
        selected[priority_id]=vote_count
        left_of_budget-=priority_price
      end
    end
  end

  def process_vote(vote)
    decrypted_vote = ReykjavikBudgetVote.new(vote.payload_data,@private_key_file)
    decrypted_vote.unpack
    add_votes(decrypted_vote)
  end

  def add_votes(decrypted_vote)
    add_construction_votes(decrypted_vote.construction_priority_ids)
    add_maintenance_votes(decrypted_vote.maintenance_priority_ids)
  end

  def add_construction_votes(priority_ids)
    priority_ids.each do |priority_id|
      @construction_priority_ids_count[priority_id] = 0 unless @construction_priority_ids_count[priority_id]
      @construction_priority_ids_count[priority_id] += 1
    end
  end

  def add_maintenance_votes(priority_ids)
    priority_ids.each do |priority_id|
      @maintenance_priority_ids_count[priority_id] = 0 unless @maintenance_priority_ids_count[priority_id]
      @maintenance_priority_ids_count[priority_id] += 1
    end
  end


  def add_priorities_to_csv(priorities,csv)
    csv << [""]
    csv << ["Verkefni"]
    csv << ["Id","Nafn","Atkvæði","Verð"]
    priorities.sort_by{|p| [-p[1], p[0]]}.each do |priority_id,vote_count|
      csv << [priority_id,@ballot.get_priority_name(priority_id),vote_count,@ballot.get_priority_price(priority_id)]
    end
  end

  def write_audit_report
    filename = "#{@neighborhood_id}_#{get_time_for_filename}_audit_report.csv"
    CSV.open(Rails.root.join("results",filename),"wb") do |csv|
      csv << ["Audit report"]
      csv << [""]
      csv << ["Hverfa id","Nafn a hverfi"]
      csv << [@neighborhood_id,@ballot.get_neighborhood_name(@neighborhood_id)]
      csv << [""]
      csv << ["Dulkóðuð kennitala","Dagsetning","IP tala"]
      Vote.find(:all, :order=>"user_id_hash").each do |vote|
        csv << [vote.user_id_hash,vote.created_at,vote.client_ip_address]
      end
    end
  end

  def get_time_for_filename
    Time.now.strftime('%Y_%m_%d.%H_%M_%S')
  end
end