# coding: utf-8

require 'csv'

class ReykjavikBudgetVoteCounting
  attr_reader :construction_priority_ids_count, :maintenance_priority_ids_count

  def initialize(private_key_file)
    @construction_priority_ids_count = Hash.new
    @maintenance_priority_ids_count = Hash.new
    @private_key_file = private_key_file
  end

  def count_unique_votes(csv_out=true)
    Vote.group(:user_id_hash).order("votes.created_at ASC").each do |vote|
      process_vote(vote)
    end
    if csv_out
      write_voting_results_report
      write_audit_report
    end
  end

  def count_all_votes
    Vote.find(:all,:select=>"user_id_hash, payload_data", :order=>"created_at").each do |vote|
      process_vote(vote)
    end
  end

  def count_all_test_votes(test_votes)
    test_votes.each do |vote|
      decrypted_vote = ReykjavikBudgetVote.new(vote,@private_key_file)
      decrypted_vote.unpack_without_encryption
      add_votes(decrypted_vote)
    end
  end

  private

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