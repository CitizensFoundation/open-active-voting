class AddCountingProgress < ActiveRecord::Migration
  def change
    add_column :config, :counting_progress, :text
  end
end
