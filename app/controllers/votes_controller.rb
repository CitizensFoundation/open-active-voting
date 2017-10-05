# coding: utf-8

# Copyright (C) 2010-2017 Íbúar ses / Citizens Foundation Iceland
# Authors Robert Bjarnason, Gunnar Grimsson & Gudny Maren Valsdottir
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

require 'digest/sha1'
require 'nokogiri'
require 'base64'
require 'ruby-saml'

#require Rails.root.join('lib','ruby-saml','lib','ruby-saml').to_s

DSIG = "http://www.w3.org/2000/09/xmldsig#"

class VotesController < ApplicationController

  after_filter :log_session_id
  skip_before_filter :verify_authenticity_token, :only => [:authenticate_from_island_is]

  http_basic_authenticate_with :name => "user", :password => "password", if: "Rails.env.production?"

  # This is a test method for load testing to allow load testing without the secure authentication
  def force_session_id
    if ENV["LOAD_TESTING_MODE"]=="true"
      session[:have_authenticated_and_been_approved] = true
      Rails.cache.write(request.session_options[:id],request.session_options[:id])
    end

     respond_to do |format|
       format.json { render :json => [:ok => true ]}
     end
  end

  # Logout and reset the session
  def logout
    reset_session
    redirect_to "/"
  end

  # Send the config and public key to the client app
  def boot
    respond_to do |format|
      format.json { render :json => { :config => @config, :public_key => @public_key }}
    end
  end

  # The redirect return point from the external island.is authentication
  def authenticate_from_island_is
    unless perform_island_is_authentication(params[:token],request)
      Rails.logger.error("No identity from island.is for session id: #{request.session_options[:id]}")
      @error = "Það hefur komið upp villa við innskráningu vinsamlegast reyndu aftur"
    end
    respond_to do |format|
      format.html
    end
  end

  # Get the voting areas
  def get_areas
    respond_to do |format|
      format.json { render :json => {:areas => BudgetBallotArea.all,
                                     area_voter_count: Vote.group(:area_id).distinct.count(:user_id_hash),
                                     total_voter_count: Vote.distinct.count(:user_id_hash) }}
    end
  end


  # Am I logged in?
  def is_logged_in
    respond_to do |format|
      format.json { render :json => { isLoggedin: (request.session_options[:id] and Rails.cache.read(request.session_options[:id])!=nil) }}
    end
  end

  # Proxy for ideas from better iceland
  def better_iceland_proxy
    post_url = "https://www.betraisland.is"+params[:params]
    encoded_url = URI.encode(post_url)
    uri = URI(encoded_url)
    res = Net::HTTP.get(uri)
    post_json = JSON.parse(res)
    puts post_json
    respond_to do |format|
      format.json { render :json => post_json }
    end
  end

  # Get the ballot and display it to the user
  def get_ballot
    # Get the budget ballot area from the database
    @area = BudgetBallotArea.where(:id => params[:area_id].to_i).first

    # Get all budget ballot items

    @budget_ballot_items_lang = BudgetBallotItem.where(:budget_ballot_area_id=> @area.id).all

    @budget_ballot_items = []
    @budget_ballot_items_lang.each_with_index { |item, index|
      new_item = item

      I18n.locale = "is"
      new_item.name_is = item.name
      new_item.description_is = item.description

      I18n.locale = "en"
      new_item.name_en = item.name
      new_item.description_en = item.description
      @budget_ballot_items << new_item

      I18n.locale = "pl"
      new_item.name_pl = item.name
      new_item.description_pl = item.description
      @budget_ballot_items << new_item
    }

    respond_to do |format|
      format.json { render :json =>  {:area=>@area, :budget_ballot_items => @budget_ballot_items }, methods: [:name_is, :name_en, :name_pl, :description_is, :description_en, :description_pl]}
    end
  end

  # Encrypted vote posted by the user
  def post_vote
    # Try to read the vote identity and redirect to authentication error if not found
    if request.session_options[:id] and voter_identity_hash = Rails.cache.read(request.session_options[:id])

      # Hide IP address if needed
      ip_address = DO_NOT_LOG_IP_ADDRESSES == false ? request.remote_ip : "n/a"

      # Create an encrypted checksum
      encrypted_vote_checksum = Vote.generate_encrypted_checksum(voter_identity_hash,params[:encrypted_vote],ip_address,params[:area_id],request.session_options[:id])

      # Save the vote to the database
      if Vote.create(:user_id_hash => voter_identity_hash,
                     :payload_data => params[:encrypted_vote],
                     :client_ip_address => ip_address,
                     :area_id =>params[:area_id],
                     :session_id => request.session_options[:id],
                     :encrypted_vote_checksum => encrypted_vote_checksum)

        # Count how many times this particular voter has voted
        vote_count = Vote.where(:user_id_hash=>voter_identity_hash).count
        Rails.logger.info("Saved vote for session id: #{request.session_options[:id]}")
        response = {:error=>false, :vote_ok=>true, :vote_count=> vote_count}
      else
        Rails.logger.error("Could not save vote for session id: #{request.session_options[:id]}")
        response = {:error=>true, :vote_ok=>false}
      end
    else
      response = {:error=>true, :vote_ok=>false}
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
    end

    Rails.cache.write(request.session_options[:id], nil)
    reset_session

    respond_to do |format|
      format.json { render :json => response }
    end
  end

  private

  def log_session_id
    Rails.logger.info("Session id: #{request.session_options[:id]}")
  end

  def saml_settings
    settings = OneLogin::RubySaml::Settings.new

    settings.assertion_consumer_service_url = @config.saml_assertion_consumer_service_url
    settings.issuer                         = request.host
    settings.idp_sso_target_url             = @config.saml_idp_sso_target_url
    settings.idp_cert_fingerprint           = @config.saml_idp_cert_fingerprint
    settings.idp_cert_fingerprint_algorithm = "http://www.w3.org/2000/09/xmldsig#sha1"
    settings.name_identifier_format         = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
    settings.authn_context = "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport"
    settings.security[:digest_method]    = XMLSecurity::Document::SHA256
    settings.security[:signature_method] = XMLSecurity::Document::RSA_SHA256
    settings
  end

  def perform_island_is_authentication(token,request)
    @response = OneLogin::RubySaml::Response.new(token)
    @response.settings = saml_settings
    begin
      # SAML verification
      saml_validation_response = @response.is_valid?

      Rails.logger.info("SAML validation response: #{saml_validation_response}")

      # Check and see if the response is a success
      if saml_validation_response==true
        parsed = Nokogiri.parse(@response.response.to_s)
        national_identity_hash = parsed.root.xpath("//blarg:Attribute['SSN']", {"blarg" => 'urn:oasis:names:tc:SAML:2.0:assertion'}).children[0].text
        assertion_id = parsed.root.xpath("//blarg:Assertion/@ID", {"blarg" => 'urn:oasis:names:tc:SAML:2.0:assertion'}).to_s
        if SamlAssertion.where(:assertion_id=>assertion_id).first
          raise "Duplicate SAML 2 assertion error"
        else
          SamlAssertion.create!(:assertion_id=>assertion_id)
        end
      else
        raise "Authentication was not a success #{@response.inspect}"
      end

      Rails.logger.info(@response.response)

      # Verify x509 cert from a known trusted source
      #known_x509_cert = OpenSSL::X509::Certificate.new(@config.known_x509_cert).to_s

      #test_x509_cert_source_txt_b64 = REXML::XPath.first(REXML::Document.new(@response.response.to_s), "//ds:X509Certificate", { "ds"=>DSIG })
      #test_x509_cert_source_txt = Base64.decode64(test_x509_cert_source_txt_b64.text)

      #test_x509_cert = OpenSSL::X509::Certificate.new(test_x509_cert_source_txt).to_s

      #known_x509_cert_txt = known_x509_cert.to_s
      #test_x509_cert_txt = test_x509_cert.to_s

      #unless known_x509_cert_txt == test_x509_cert_txt
        #raise "Failed to verify x509 cert KNOWN #{known_x509_cert_txt} (#{known_x509_cert_txt.size}) |#{known_x509_cert_txt.encoding.name}| TEST #{test_x509_cert_txt} (#{test_x509_cert_txt.size}) |#{test_x509_cert_txt.encoding.name}|"
      #end

      # Write the national identity hash to memcache under our session id
      if national_identity_hash and national_identity_hash!=""
        session[:have_authenticated_and_been_approved] = true
        Rails.cache.write(request.session_options[:id], national_identity_hash)
      end
      Rails.logger.info("Authentication successful for #{national_identity_hash} #{@response.inspect}")

      update_activity_time

      return true
    rescue  => ex
      notify_airbrake(ex)
      Rails.logger.error(ex.to_s+"\n\n"+ex.backtrace.to_s)
      Rails.logger.error(@response.inspect)
      return false
    end
  end
end
