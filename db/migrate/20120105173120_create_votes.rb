class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :neighborhood_id, :null=>false
      t.string :user_id_hash, :null=>false
      t.text :payload_data, :null=>false
      t.datetime :localtime, :null=>false
      t.string :client_ip_address, :null=>false
      t.timestamps
    end

    add_index :votes, :user_id_hash
    add_index :votes, :neighborhood_id
  end
end