# coding: utf-8

# Copyright (C) 2010-2016 City of Reykjavik, Íbúar ses
# Authors Robert Bjarnason, Gunnar Grimsson & Gudny Maren Valsdottir
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

require 'csv'

class BudgetVoteCounting
  attr_reader :idea_ids_count

  def initialize(private_key_file)
    @idea_ids_count = Hash.new
    @idea_ids_selected_count = Hash.new
    @private_key_file = private_key_file
    @invalid_votes = []
  end

  def count_unique_votes(csv_out=true,area_id)
    # Count all unique votes from the same identity
    @area_id = area_id

    final_split_vote = FinalSplitVote.where(:area_id=>area_id)
    puts "Counting #{final_split_vote.length} votes"
    final_split_vote.all.each do |vote|
      begin
        process_vote(vote)
      rescue Exception => e
        puts @invalid_votes << [vote.inspect,e.message]
      end
    end

    select_top_ideas_that_still_fit_budget

    if csv_out
      filename = write_voting_results_report
      write_audit_report
      filename
    end
  end

  def count_all_votes
    # Count all votes, including duplicates from the same identity
    Vote.find(:all, :order=>"created_at").each do |vote|
      vote.generated_vote_checksum = Vote.generate_encrypted_checksum(vote.user_id_hash, vote.payload_data, vote.client_ip_address, vote.area_id, vote.session_id)
      process_vote(vote)
    end
  end

  def count_all_test_votes(test_votes,area_id=nil,write_out_path=nil)
    # Count test votes, for testing purposes only
    @area_id = area_id
    test_votes.each do |vote|
      decrypted_vote = BudgetVote.new(vote,@private_key_file,vote)
      decrypted_vote.unpack_without_encryption
      add_votes(decrypted_vote)
    end
    if area_id
      select_top_ideas_that_still_fit_budget
      write_voting_results_report("voting_results.csv",write_out_path)
    end
  end


  def write_voting_results_report(filename="voting_results.csv",write_out_path=nil)
    # Write the voting results to a csv file including the hashed identities
    puts "Write the voting results"
    filename = "#{@area_id}_#{get_time_for_filename}_#{filename}"
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
      csv << ["Valin verkefni"]
      add_ideas_to_csv(@idea_ids_selected_count,csv)
      csv << [""]
      csv << ["Heildaratkvæði"]
      add_ideas_to_csv(@idea_ids_count,csv)
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
    filename = "#{@area_id}_#{get_time_for_filename}_counted_unencrypted_audit_report.csv"
    filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    CSV.open(filepath,"wb") do |csv|
      csv << ["Audit counted unencrypted votes report"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Allir taldir atkvæðaseðlar"]
      csv << ["Hverfa ID","Dagsetning","Kosin verkefna IDs"]
      FinalSplitVote.find(:all, :include=>:vote, :conditions=>["final_split_votes.area_id = ?",@area_id], :order=>"votes.created_at").each do |final_vote|
        begin
          csv << [final_vote.area_id,final_vote.vote.created_at]+BudgetVote.new(final_vote.payload_data,@private_key_file,final_vote).unencryped_vote_for_audit_csv
        rescue Exception => e
          csv << [final_vote.area_id,final_vote.vote.created_at,"Ógilt atkvæði",final_vote.inspect,e.message]
        end

      end
    end
  end

  private

  def select_top_ideas_that_still_fit_budget
    # Select the top ideas that still fit the budget
    @idea_ids_selected_count = select_top_ideas(@idea_ids_count)
  end

  def select_top_ideas(idea_ids)
    # Select the top ideas that still fit the budget
    total_budget = BudgetBallot.get_area_budget(@area_id)
    left_of_budget = total_budget
    selected = Hash.new
    idea_ids.sort_by{|p| [-p[1], p[0]]}.each do |idea_id,vote_count|
      idea_price = BudgetBallot.get_idea_price(@area_id,idea_id)
      #puts "PRIORITY PRICE #{idea_price} #{@area_id} #{idea_id}"
      if idea_price<=left_of_budget
        selected[idea_id]=vote_count
        left_of_budget-=idea_price
      end
    end
    selected
  end

  def process_vote(vote)
    # Decrypt and add votes
    decrypted_vote = BudgetVote.new(vote.payload_data,@private_key_file,vote)
    decrypted_vote.unpack
    add_votes(decrypted_vote)
  end

  def add_votes(vote)
    #puts "Counting votes #{vote.idea_ids}"
    vote.idea_ids.each do |idea_group|
      idea_group.each do |idea_id|
        #raise "Ballots don't match votes" unless BudgetBallot.where(:idea_id=>idea_id, :budget_ballot_area_id=>vote.vote.area_id).first
        @idea_ids_count[idea_id] = 0 unless @idea_ids_count[idea_id]
        @idea_ids_count[idea_id] += 1
      end
    end
  end

  def add_ideas_to_csv(ideas,csv)
    # Add ideas to csv
    csv << ["Id","Nafn","Atkvæði","Kostnaður"]
    total_vote_count = 0
    total_price = 0
    ideas.sort_by{|p| [-p[1], p[0]]}.each do |idea_id,vote_count|
      total_vote_count+=vote_count
      total_price+=BudgetBallot.get_idea_price(@area_id,idea_id)
      csv << [idea_id,BudgetBallot.get_idea_name(@area_id,idea_id),vote_count,BudgetBallot.get_idea_price(@area_id,idea_id)]
    end
    csv << ["","Samtals",total_vote_count,total_price]
  end

  def write_voting_totals(csv)
    # Add totals to csv
    csv << ["Hverfa ID","Nafn á hverfi","Fjármagn (m.)"]
    csv << [@area_id,BudgetBallot.get_area_name(@area_id),BudgetBallot.get_area_budget(@area_id)]
    csv << [""]
    csv << ["Innsendir atkvæðaseðlar","Taldir atkvæðaseðlar","Innsendir atkvæðaseðlar í þessu hverfi","Taldir atkvæðaseðlar í þessu hverfi"]
    csv << [Vote.count,FinalSplitVote.count,Vote.where(:area_id=>@area_id).count,FinalSplitVote.where(:area_id=>@area_id).count]
    csv << [""]
  end

  def write_audit_report
    # Write out the audit report to csv
    puts "Write audit report"
    filename = "#{@area_id}_#{get_time_for_filename}_audit_report.csv"
    filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    CSV.open(filepath,"wb") do |csv|
      csv << ["Audit report"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Allir innsendir atkvæðaseðlar"]
      csv << ["Hverfa ID","Dulkóðuð kennitala","Dagsetning","IP tala","Dulkóðað atkvæði"]
      Vote.find(:all, :conditions=>["area_id = ?",@area_id], :order=>"created_at").each do |vote|
        csv << [vote.area_id,vote.user_id_hash,vote.created_at,vote.client_ip_address,vote.payload_data]
      end
    end
  end

  def get_time_for_filename
    Time.now.strftime('%Y_%m_%d.%H_%M_%S')
  end
end