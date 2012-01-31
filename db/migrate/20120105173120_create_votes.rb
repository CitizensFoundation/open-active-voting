class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :user_id_hash
      t.text :payload_data
      t.datetime :localtime
      t.string :client_ip_address
      t.timestamps
    end

    add_index :votes, :user_id_hash
  end
end