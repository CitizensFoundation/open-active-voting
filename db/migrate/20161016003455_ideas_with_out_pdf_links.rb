class IdeasWithOutPdfLinks < ActiveRecord::Migration
  def change
    add_column :config, :ideas_without_pdfs, :text
  end
end
