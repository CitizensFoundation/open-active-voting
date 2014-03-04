class AddSoapUrlToConfig < ActiveRecord::Migration
  def change
    add_column :config, :soap_url, :string
  end
end
