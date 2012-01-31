# coding: utf-8

require 'csv'

class ReykjavikBudgetVoteCounting

  def count_all_votes(private_key_file)
    @construction_priority_ids_count = Hash.new
    @maintenance_priority_ids_count = Hash.new
    @private_key_file = private_key_file
    Vote.find(:all,:select=>"DISTINCT(user_id_hash), payload_data", :order=>"created_at").each do |vote|
      process_vote(vote)
    end
    write_voting_results_report
    write_audit_report
  end

  private

  def process_vote(vote)
    puts vote.inspect
    decrypted_vote = ReykjavikBudgetVote.new(vote.payload_data,@private_key_file)
    decrypted_vote.unpack
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

  def write_voting_results_report
     CSV.open(Rails.root.join("results","voting_results.csv"),"wb") do |csv|
      csv << ["Niðurstöður fyrir Nýframkvæmdir"]
      add_priorities_to_csv(@construction_priority_ids_count,csv)
      csv << ["Niðurstöður fyrir Viðhaldsverkefni"]
      add_priorities_to_csv(@maintenance_priority_ids_count,csv)
    end
  end

  def add_priorities_to_csv(priorities,csv)
    csv << [""]
    priorities.sort {|id,vote_count| vote_count <=> vote_count }.each do |priority_id,vote_count|
      csv << [priority_id,vote_count]
    end
  end

  def write_audit_report
    CSV.open(Rails.root.join("results","audit_report.csv"),"wb") do |csv|
      csv << ["Audit report"]
      csv << [""]
      csv << ["Dulkóðuð kennitala","dagsetting","ip tala"]
      Vote.find(:all, :order=>"user_id_hash").each do |vote|
        csv << [vote.user_id_hash,vote.created_at,vote.client_ip_address]
      end
    end
  end
end