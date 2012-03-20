class AddSessionIdAndHash < ActiveRecord::Migration
  def up
    add_column :votes, :session_id, :string, :null=>false
  end

  def down
  end
end
