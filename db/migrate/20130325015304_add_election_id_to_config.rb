class AddElectionIdToConfig < ActiveRecord::Migration
  def change
    add_column :config, :election_id, :string
  end
end
