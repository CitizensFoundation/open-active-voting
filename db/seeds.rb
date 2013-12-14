# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
if Rails.env.test?
  c=BudgetConfig.new
  c.timeout_in_seconds = 20
  c.rsk_url = "https://www.island.is/audkenning?id=ktest.betrireykjavik.is"
  c.election_id = "CA8796EE-7239-497A-96FE-156419E4F9BA"
  c.saml_assertion_consumer_service_url = "https://egov.webservice.is/saml/consume"
  c.saml_idp_sso_target_url = "https://ktest.betrireykjavik.is/"
  c.saml_idp_cert_fingerprint = "B9:F6:B3:2E:C9:73:F1:47:30:34:1E:05:2B:A5:0A:75:08:CD:1D:26"
  c.saml_name_identifier_format = "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  c.rsk_svf_nr = %w{0000}
  c.save
end
