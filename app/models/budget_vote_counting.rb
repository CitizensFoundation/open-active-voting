# coding: utf-8

# Copyright (C) 2010-2016 Íbúar ses / Citizens Foundation Iceland
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
  attr_reader :item_ids_count

  def initialize(private_key_file)
    @item_ids_count = Hash.new
    @item_ids_selected_count = Hash.new
    @private_key_file = private_key_file
    @invalid_votes = []
  end

  # Count all unique votes from the same identity
  def count_unique_votes(csv_out=true,area_id)

    @area_id = area_id

    # Use data from the final split vote table
    final_split_vote = FinalSplitVote.where(:area_id=>area_id)
    puts "Counting #{final_split_vote.length} votes"

    # Process and count all the votes for this area
    final_split_vote.all.each do |vote|
      begin
        process_vote(vote)
      rescue Exception => e
        puts @invalid_votes << [vote.inspect,e.message]
      end
    end

    select_top_items_that_still_fit_budget

    if csv_out
      filename = write_voting_results_report
      write_audit_report
      filename
    end
  end

  # Write the voting results to a csv file including the hashed identities
  def write_voting_results_report(filename="voting_results.csv",write_out_path=nil)
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
      add_items_to_csv(@item_ids_selected_count,csv)
      csv << [""]
      csv << ["Heildaratkvæði"]
      add_items_to_csv(@item_ids_count,csv)
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

  # Write all counted votes unencrypted to csv file
  def write_counted_unencrypted_audit_report
    filename = "#{@area_id}_#{get_time_for_filename}_counted_unencrypted_audit_report.csv"
    filepath = Rails.env.test? ? Rails.root.join("test","results",filename) : Rails.root.join("results",filename)
    CSV.open(filepath,"wb") do |csv|
      csv << ["Audit counted unencrypted votes report"]
      csv << [""]
      write_voting_totals(csv)
      csv << [""]
      csv << ["Allir taldir atkvæðaseðlar"]
      csv << ["Hverfa ID","Dagsetning","Kosin verkefna IDs"]
      FinalSplitVote.where(["final_split_votes.area_id = ?",@area_id]).includes(:vote).order("votes.created_at").all.each do |final_vote|
        begin
          csv << [final_vote.area_id,final_vote.vote.created_at]+BudgetVoteHelper.new(final_vote.payload_data, @private_key_file, final_vote).unencryped_vote_for_audit_csv
        rescue Exception => e
          csv << [final_vote.area_id,final_vote.vote.created_at,"Ógilt atkvæði",final_vote.inspect,e.message]
        end

      end
    end
  end

  # PUBLIC METHODS USED FOR TESTING ONLY

  # For testing only, count all votes, including duplicates from the same identity
  def count_all_votes
    Vote.order("created_at").all.each do |vote|
      vote.generated_vote_checksum = Vote.generate_encrypted_checksum(vote.user_id_hash, vote.payload_data, vote.client_ip_address, vote.area_id, vote.session_id)
      process_vote(vote)
    end
  end

  # For testing only, count test votes
  def count_all_test_votes_from_browser(test_votes,area_id=nil,write_out_path=nil)
    @area_id = area_id
    test_votes.each do |vote|
      decrypted_vote = BudgetVoteHelper.new(vote, @private_key_file, vote)
      add_votes(decrypted_vote.unpack_without_encryption)
    end
    if area_id
      select_top_items_that_still_fit_budget
      write_voting_results_report("voting_results.csv",write_out_path)
    end
  end

  private

  # Select the top items that still fit the budget
  def select_top_items_that_still_fit_budget
    total_budget = BudgetBallotItem.get_area_budget(@area_id)
    left_of_budget = total_budget

    selected = Hash.new

    # Go through all the items in the order of votes and selected the ones that still fit the budget
    @item_ids_count.sort_by{|p| [-p[1], p[0]]}.each do |item_id,vote_count|
      item_price = BudgetBallotItem.get_item_price(@area_id,item_id)

      # Check if item still fits into what is left of the budget and add it to selected if it does
      if item_price<=left_of_budget
        selected[item_id]=vote_count
        left_of_budget-=item_price
      end
    end

    @item_ids_selected_count = selected
  end

  # Decrypt and add votes from ballot to total
  def process_vote(vote)
    decrypted_vote = BudgetVoteHelper.new(vote.payload_data, @private_key_file, vote)
    add_votes(decrypted_vote.unpack)
  end

  # Add all the decrypted votes from this ballot
  def add_votes(item_array)
    puts item_array.to_s
    item_array.each do |item_id|
      raise "Voted ballot item not found" unless BudgetBallotItem.where(:id=>item_id).first
      # If the counting hash for item does not exists created it
      @item_ids_count[item_id] = 0 unless @item_ids_count[item_id]

      # Add one vote for a given item
      @item_ids_count[item_id] += 1
    end
  end

  # Add items to csv
  def add_items_to_csv(items,csv)
    csv << ["Id","Nafn","Atkvæði","Kostnaður"]
    total_vote_count = 0
    total_price = 0
    items.sort_by{|p| [-p[1], p[0]]}.each do |item_id,vote_count|
      total_vote_count+=vote_count
      total_price+=BudgetBallotItem.get_item_price(@area_id,item_id)
      csv << [item_id,BudgetBallotItem.get_item_name(@area_id,item_id),vote_count,BudgetBallotItem.get_item_price(@area_id,item_id)]
    end
    csv << ["","Samtals",total_vote_count,total_price]
  end

  # Add totals to csv
  def write_voting_totals(csv)
    csv << ["Hverfa ID","Nafn á hverfi","Fjármagn (m.)"]
    csv << [@area_id,BudgetBallotItem.get_area_name(@area_id),BudgetBallotItem.get_area_budget(@area_id)]
    csv << [""]
    csv << ["Innsendir atkvæðaseðlar","Taldir atkvæðaseðlar","Innsendir atkvæðaseðlar í þessu hverfi","Taldir atkvæðaseðlar í þessu hverfi"]
    csv << [Vote.count,FinalSplitVote.count,Vote.where(:area_id=>@area_id).count,FinalSplitVote.where(:area_id=>@area_id).count]
    csv << [""]
  end

  # Write out the audit report to csv
  def write_audit_report
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
      Vote.where(["area_id = ?",@area_id]).order("created_at").all.each do |vote|
        csv << [vote.area_id,vote.user_id_hash,vote.created_at,vote.client_ip_address,vote.payload_data]
      end
    end
  end

  def get_time_for_filename
    Time.now.strftime('%Y_%m_%d.%H_%M_%S')
  end
end