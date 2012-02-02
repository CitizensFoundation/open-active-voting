class Vote < ActiveRecord::Base

  def self.authenticate_from_island_is(token,request)
    begin
      soap_url = "https://egov.webservice.is/sst/runtime.asvc/com.actional.soapstation.eGOVDKM_AuthConsumer.AccessPoint?WSDL"
      soap = SOAP::WSDLDriverFactory.new(soap_url).create_rpc_driver
      soap.options["protocol.http.basic_auth"] << [soap_url,DB_CONFIG[RAILS_ENV]['rsk_soap_username'],DB_CONFIG[RAILS_ENV]['rsk_soap_password']]
      @response = soap.generateSAMLFromToken(token,:token => token, :ipAddress=>request.remote_ip)

      if @response and @response[0] and @response[0].message="Success"
        elements = Nokogiri.parse(@response[1])
        name = elements.root.xpath("//blarg:NameIdentifier", {'blarg' => 'urn:oasis:names:tc:SAML:1.0:assertion'}).first.text
        national_identity_hash = elements.root.xpath("//blarg:Attribute[@AttributeName='SSN']", {'blarg' => 'urn:oasis:names:tc:SAML:1.0:assertion'}).text
      else
        raise "Message was not a success #{response.inspect}"
      end
      Rails.cache.write(request.session_options[:id],national_identity_hash)
      Rails.logger.info("Authentication successful for #{national_identity_hash} #{response.inspect}")
      return true
    rescue  => ex
      Rails.logger.error(ex.to_s+"\n\n"+ex.backtrace.to_s)
      Rails.logger.error(@response.inspect)
      return false
    end
  end
end
