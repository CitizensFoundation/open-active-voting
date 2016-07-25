class AddImagemapToConfig < ActiveRecord::Migration
  def change
    add_column :config, :areas_imagemap, :text
    add_column :config, :areas_imagemap_image, :string
  end
end
