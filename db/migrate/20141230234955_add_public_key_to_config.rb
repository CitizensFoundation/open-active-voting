class AddPublicKeyToConfig < ActiveRecord::Migration
  def change
    add_column :config, :public_key, :text
  end
end
