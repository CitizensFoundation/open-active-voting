class AddToConfig < ActiveRecord::Migration
  def up
    add_column :config, :rsk_soap_username, :string
    add_column :config, :rsk_soap_password, :string
  end

  def down
  end
end
