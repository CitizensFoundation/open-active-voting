class AddImagemapToConfig < ActiveRecord::Migration
  def change
    add_column :config, :areas_imagemap, :text
  end
end
