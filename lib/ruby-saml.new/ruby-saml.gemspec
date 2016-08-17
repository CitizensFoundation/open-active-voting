# -*- encoding: utf-8 -*-
# stub: ruby-saml 0.8.1 ruby lib

Gem::Specification.new do |s|
  s.name = "ruby-saml"
  s.version = "0.8.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["OneLogin LLC"]
  s.date = "2016-08-07"
  s.description = "SAML toolkit for Ruby on Rails"
  s.email = "support@onelogin.com"
  s.extra_rdoc_files = ["LICENSE", "README.md"]
  s.files = [".document", ".gitignore", ".travis.yml", "Gemfile", "LICENSE", "README.md", "Rakefile", "changelog.md", "lib/onelogin/ruby-saml/attribute_service.rb", "lib/onelogin/ruby-saml/attributes.rb", "lib/onelogin/ruby-saml/authrequest.rb", "lib/onelogin/ruby-saml/idp_metadata_parser.rb", "lib/onelogin/ruby-saml/logging.rb", "lib/onelogin/ruby-saml/logoutrequest.rb", "lib/onelogin/ruby-saml/logoutresponse.rb", "lib/onelogin/ruby-saml/metadata.rb", "lib/onelogin/ruby-saml/response.rb", "lib/onelogin/ruby-saml/saml_message.rb", "lib/onelogin/ruby-saml/settings.rb", "lib/onelogin/ruby-saml/slo_logoutrequest.rb", "lib/onelogin/ruby-saml/slo_logoutresponse.rb", "lib/onelogin/ruby-saml/utils.rb", "lib/onelogin/ruby-saml/validation_error.rb", "lib/onelogin/ruby-saml/version.rb", "lib/ruby-saml.rb", "lib/schemas/saml-schema-assertion-2.0.xsd", "lib/schemas/saml-schema-authn-context-2.0.xsd", "lib/schemas/saml-schema-authn-context-types-2.0.xsd", "lib/schemas/saml-schema-metadata-2.0.xsd", "lib/schemas/saml-schema-protocol-2.0.xsd", "lib/schemas/sstc-metadata-attr.xsd", "lib/schemas/sstc-saml-attribute-ext.xsd", "lib/schemas/sstc-saml-metadata-algsupport-v1.0.xsd", "lib/schemas/sstc-saml-metadata-ui-v1.0.xsd", "lib/schemas/xenc-schema.xsd", "lib/schemas/xml.xsd", "lib/schemas/xmldsig-core-schema.xsd", "lib/xml_security.rb", "ruby-saml.gemspec", "test/certificates/certificate1", "test/certificates/r1_certificate2_base64", "test/certificates/ruby-saml.crt", "test/certificates/ruby-saml.key", "test/idp_metadata_parser_test.rb", "test/logoutrequest_test.rb", "test/logoutresponse_test.rb", "test/metadata_test.rb", "test/request_test.rb", "test/response_test.rb", "test/responses/adfs_response_sha1.xml", "test/responses/adfs_response_sha256.xml", "test/responses/adfs_response_sha384.xml", "test/responses/adfs_response_sha512.xml", "test/responses/adfs_response_xmlns.xml", "test/responses/idp_descriptor.xml", "test/responses/logoutresponse_fixtures.rb", "test/responses/no_signature_ns.xml", "test/responses/open_saml_response.xml", "test/responses/r1_response6.xml.base64", "test/responses/response1.xml.base64", "test/responses/response2.xml.base64", "test/responses/response3.xml.base64", "test/responses/response4.xml.base64", "test/responses/response5.xml.base64", "test/responses/response_no_cert_and_encrypted_attrs.xml", "test/responses/response_with_ampersands.xml", "test/responses/response_with_ampersands.xml.base64", "test/responses/response_with_multiple_attribute_values.xml", "test/responses/simple_saml_php.xml", "test/responses/slo_request.xml", "test/responses/starfield_response.xml.base64", "test/responses/wrapped_response_2.xml.base64", "test/settings_test.rb", "test/slo_logoutrequest_test.rb", "test/slo_logoutresponse_test.rb", "test/test_helper.rb", "test/xml_security_test.rb"]
  s.homepage = "http://github.com/onelogin/ruby-saml"
  s.licenses = ["MIT"]
  s.rdoc_options = ["--charset=UTF-8"]
  s.rubyforge_project = "http://www.rubygems.org/gems/ruby-saml"
  s.rubygems_version = "2.4.8"
  s.summary = "SAML Ruby Tookit"
  s.test_files = ["test/certificates/certificate1", "test/certificates/r1_certificate2_base64", "test/certificates/ruby-saml.crt", "test/certificates/ruby-saml.key", "test/idp_metadata_parser_test.rb", "test/logoutrequest_test.rb", "test/logoutresponse_test.rb", "test/metadata_test.rb", "test/request_test.rb", "test/response_test.rb", "test/responses/adfs_response_sha1.xml", "test/responses/adfs_response_sha256.xml", "test/responses/adfs_response_sha384.xml", "test/responses/adfs_response_sha512.xml", "test/responses/adfs_response_xmlns.xml", "test/responses/idp_descriptor.xml", "test/responses/logoutresponse_fixtures.rb", "test/responses/no_signature_ns.xml", "test/responses/open_saml_response.xml", "test/responses/r1_response6.xml.base64", "test/responses/response1.xml.base64", "test/responses/response2.xml.base64", "test/responses/response3.xml.base64", "test/responses/response4.xml.base64", "test/responses/response5.xml.base64", "test/responses/response_no_cert_and_encrypted_attrs.xml", "test/responses/response_with_ampersands.xml", "test/responses/response_with_ampersands.xml.base64", "test/responses/response_with_multiple_attribute_values.xml", "test/responses/simple_saml_php.xml", "test/responses/slo_request.xml", "test/responses/starfield_response.xml.base64", "test/responses/wrapped_response_2.xml.base64", "test/settings_test.rb", "test/slo_logoutrequest_test.rb", "test/slo_logoutresponse_test.rb", "test/test_helper.rb", "test/xml_security_test.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<uuid>, ["~> 2.3"])
      s.add_runtime_dependency(%q<nokogiri>, [">= 1.5.0"])
    else
      s.add_dependency(%q<uuid>, ["~> 2.3"])
      s.add_dependency(%q<nokogiri>, [">= 1.5.0"])
    end
  else
    s.add_dependency(%q<uuid>, ["~> 2.3"])
    s.add_dependency(%q<nokogiri>, [">= 1.5.0"])
  end
end
