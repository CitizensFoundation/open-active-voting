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
    @invalid_votes = []
  end

  def count_unique_votes(csv_out=true,neighborhood_id)
    # Count all unique votes from the same identity
    @neighborhood_id = neighborhood_id

    FinalSplitVote.where(:neighborhood_id=>neighborhood_id).all.each do |vote|
      begin
        process_vote(vote)
      rescue Exception => e
        puts @invalid_votes << [vote.inspect,e.message]
      end
    end

    select_top_priorities_that_still_fit_budget

    if csv_out
      filename = write_voting_results_report
      write_audit_report
      filename
    end
  end

  def count_all_votes
    # Count all votes, including duplicates from the same identity
    Vote.find(:all, :order=>"created_at").each do |vote|
      vote.generated_vote_checksum = Vote.generate_encrypted_checksum(vote.user_id_hash, vote.payload_data, vote.client_ip_address, vote.neighborhood_id, vote.session_id)
      process_vote(vote)
    end
  end

  def count_all_test_votes(test_votes,neighborhood_id=nil,write_out_path=nil)
    # Count test votes, for testing purposes only
    @neighborhood_id = neighborhood_id
    test_votes.each do |vote|
      decrypted_vote = ReykjavikBudgetVote.new(vote,@private_key_file,vote)
      decrypted_vote.unpack_without_encryption
      add_votes(decrypted_vote)
    end
    if neighborhood_id
      select_top_priorities_that_still_fit_budget
      write_voting_results_report("voting_results.csv",write_out_path)
    end
  end


  def write_voting_results_report(filename="voting_results.csv",write_out_path=nil)
    # Write the voting results to a csv file including the hashed identities
    puts "Write the voting results"
    filename = "#{@neighborhood_id}_#{get_time_for_filename}_#{filename}"
    if write_out_path
      filepath = write_out_path
    else
      filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    end
    CSV.open(filepath,"wb") do |csv|
      csv << ["Niðurstöður kosninga"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Valin verkefni fyrir Nýframkvæmdir"]
      add_priorities_to_csv(@construction_priority_ids_selected_count,csv)
      csv << [""]
      csv << ["Valin verkefni fyrir Viðhaldsverkefni"]
      add_priorities_to_csv(@maintenance_priority_ids_selected_count,csv)
      csv << [""]
      csv << ["Heildaratkvæði fyrir Nýframkvæmdir"]
      add_priorities_to_csv(@construction_priority_ids_count,csv)
      csv << [""]
      csv << ["Heildaratkvæði fyrir Viðhaldsverkefni"]
      add_priorities_to_csv(@maintenance_priority_ids_count,csv)
      unless @invalid_votes.empty?
        csv << [""]
        csv << ["Ógild atkvæði"]
        @invalid_votes.each do |invalid_vote|
          csv << invalid_vote
        end
      end
    end
    filename
  end

  def write_counted_unencrypted_audit_report
    # Write all counted votes unencrypted to csv file
    filename = "#{@neighborhood_id}_#{get_time_for_filename}_counted_unencrypted_audit_report.csv"
    filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    CSV.open(filepath,"wb") do |csv|
      csv << ["Audit counted unencrypted votes report"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Allir taldir atkvæðaseðlar"]
      csv << ["Hverfa ID","Dagsetning","Kosin verkefna IDs"]
      FinalSplitVote.find(:all, :include=>:vote, :conditions=>["final_split_votes.neighborhood_id = ?",@neighborhood_id], :order=>"votes.created_at").each do |final_vote|
        begin
          csv << [final_vote.neighborhood_id,final_vote.vote.created_at]+ReykjavikBudgetVote.new(final_vote.payload_data,@private_key_file,final_vote).unencryped_vote_for_audit_csv
        rescue Exception => e
          csv << [final_vote.neighborhood_id,final_vote.vote.created_at,"Ógilt atkvæði",final_vote.inspect,e.message]
        end

      end
    end
  end

  private

  def select_top_priorities_that_still_fit_budget
    # Select the top priorities that still fit the budget
    @construction_priority_ids_selected_count = select_top_priorities(@construction_priority_ids_count)
    @maintenance_priority_ids_selected_count = select_top_priorities(@maintenance_priority_ids_count)
  end

  def select_top_priorities(priority_ids)
    # Select the top priorities that still fit the budget
    total_budget = @ballot.get_neighborhood_budget(@neighborhood_id)
    left_of_budget = total_budget
    selected = Hash.new
    priority_ids.sort_by{|p| [-p[1], p[0]]}.each do |priority_id,vote_count|
      priority_price = @ballot.get_priority_price(@neighborhood_id,priority_id)
      if priority_price<=left_of_budget
        selected[priority_id]=vote_count
        left_of_budget-=priority_price
      end
    end
    selected
  end

  def process_vote(vote)
    # Decrypt and add votes
    decrypted_vote = ReykjavikBudgetVote.new(vote.payload_data,@private_key_file,vote)
    decrypted_vote.unpack
    add_votes(decrypted_vote)
  end

  def add_votes(decrypted_vote)
    # Add votes to the correct arrays
    add_construction_votes(decrypted_vote.construction_priority_ids)
    add_maintenance_votes(decrypted_vote.maintenance_priority_ids)
  end

  def add_construction_votes(priority_ids)
    # Add the construction votes to an array
    priority_ids.each do |priority_id|
      @construction_priority_ids_count[priority_id] = 0 unless @construction_priority_ids_count[priority_id]
      @construction_priority_ids_count[priority_id] += 1
    end
  end

  def add_maintenance_votes(priority_ids)
    # Add the maintenance votes to an array
    priority_ids.each do |priority_id|
      @maintenance_priority_ids_count[priority_id] = 0 unless @maintenance_priority_ids_count[priority_id]
      @maintenance_priority_ids_count[priority_id] += 1
    end
  end


  def add_priorities_to_csv(priorities,csv)
    # Add priorities to csv
    csv << ["Id","Nafn","Stig","Kostnaður"]
    total_vote_count = 0
    total_price = 0
    priorities.sort_by{|p| [-p[1], p[0]]}.each do |priority_id,vote_count|
      total_vote_count+=vote_count
      total_price+=@ballot.get_priority_price(@neighborhood_id,priority_id)
      csv << [priority_id,@ballot.get_priority_name(@neighborhood_id,priority_id),vote_count,@ballot.get_priority_price(@neighborhood_id,priority_id)]
    end
    csv << ["","Samtals",total_vote_count,total_price]
  end

  def write_voting_totals(csv)
    # Add totals to csv
    csv << ["Hverfa ID","Nafn á hverfi","Fjármagn (m.)"]
    csv << [@neighborhood_id,@ballot.get_neighborhood_name(@neighborhood_id),@ballot.get_neighborhood_budget(@neighborhood_id)]
    csv << [""]
    csv << ["Innsendir atkvæðaseðlar","Taldir atkvæðaseðlar","Innsendir atkvæðaseðlar í þessu hverfi","Taldir atkvæðaseðlar í þessu hverfi"]
    csv << [Vote.count,FinalSplitVote.count,Vote.where(:neighborhood_id=>@neighborhood_id).count,FinalSplitVote.where(:neighborhood_id=>@neighborhood_id).count]
    csv << [""]
  end

  def write_audit_report
    # Write out the audit report to csv
    puts "Write audit report"
    filename = "#{@neighborhood_id}_#{get_time_for_filename}_audit_report.csv"
    filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    CSV.open(filepath,"wb") do |csv|
      csv << ["Audit report"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Allir innsendir atkvæðaseðlar"]
      csv << ["Hverfa ID","Dulkóðuð kennitala","Dagsetning","IP tala","Dulkóðað atkvæði"]
      Vote.find(:all, :conditions=>["neighborhood_id = ?",@neighborhood_id], :order=>"created_at").each do |vote|
        csv << [vote.neighborhood_id,vote.user_id_hash,vote.created_at,vote.client_ip_address,vote.payload_data]
      end
    end
  end

  def get_time_for_filename
    Time.now.strftime('%Y_%m_%d.%H_%M_%S')
  end
end