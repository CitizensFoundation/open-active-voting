class AddUserAgentAndSession < ActiveRecord::Migration
  def change
    create_table :voter_identity_sessions do |t|
      t.string :voter_identity, :null=>false
      t.string :session_id, :null=>false
      t.timestamps
    end

    add_index :voter_identity_sessions, :session_id
    add_column :votes, :client_user_agent, :text
  end

end
