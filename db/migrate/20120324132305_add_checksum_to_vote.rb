class AddChecksumToVote < ActiveRecord::Migration
  def change
    add_column :votes, :encrypted_vote_checksum, :string, :null=>false
  end
end
