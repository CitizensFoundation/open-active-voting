class AddMoreToConfig < ActiveRecord::Migration
  def change
    add_column :config, :saml_assertion_consumer_service_url, :string
    add_column :config, :saml_idp_sso_target_url, :string
    add_column :config, :saml_idp_cert_fingerprint, :string
    add_column :config, :saml_name_identifier_format, :string
    add_column :config, :rsk_svf_nr, :string
  end
end
