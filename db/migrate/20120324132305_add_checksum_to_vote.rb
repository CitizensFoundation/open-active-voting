class AddChecksumToVote < ActiveRecord::Migration
  def change
    add_column :votes, :encrypted_vote_checksum, :text, :null=>false
    add_column :final_split_votes, :encrypted_vote_checksum, :text, :null=>false
    add_column :final_split_votes, :generated_vote_checksum, :text, :null=>false
  end
end