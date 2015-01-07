class AddKnownX509CertToConfig < ActiveRecord::Migration
  def change
    add_column :config, :known_x509_cert, :text
  end
end
