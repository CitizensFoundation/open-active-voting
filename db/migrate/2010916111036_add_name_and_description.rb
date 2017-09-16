class AddNameAndDescription < ActiveRecord::Migration
  def change
    add_column :config, :election_name, :string
    add_column :config, :election_description, :text
  end
end
