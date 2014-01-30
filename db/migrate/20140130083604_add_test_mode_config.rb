class AddTestModeConfig < ActiveRecord::Migration
  def up
    add_column :config, :test_mode, :boolean, :default=>false
  end

  def down
  end
end
