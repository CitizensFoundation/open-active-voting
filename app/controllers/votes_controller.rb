# coding: utf-8

# Copyright (C) 2010,2011,2012 Íbúar ses
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
require 'soap/rpc/driver'
require 'soap/wsdlDriver'

class VotesController < ApplicationController

  after_filter :log_session_id

  def force_session_id
    # This is a test method for load testing to allow load testing without the secure authentication
    unless Rails.env.production?
      Rails.cache.write(request.session_options[:id],params[:ssn])
    end

    redirect_to "/votes/help_info"
  end

  def help_info
    # Display help information
    if params[:previous_action]=="authentication_options"
      @help_info_text = t(:votes_help_authentication_options)
    elsif params[:previous_action]=="select_area"
      @help_info_text = t(:votes_help_select_area)
    elsif params[:previous_action]=="get_ballot"
      @help_info_text = t(:votes_help_get_ballot)
    end
    render :layout=>false
  end

  def about_info
    # Display information about the vote
    render :layout=>false
  end

  def rules_info
    # Display information about the rules
    render :layout=>false
  end

  def better_reykjavik_info
    # Display information about Better Reykjavik
    render :layout=>false
  end

  def better_neighborhoods_info
    # Display information about Better Neighborhoods
    render :layout=>false
  end

  def logout_and_information
    reset_session if Rails.env.production?
    render :layout=>false
  end

  def ibuar_info
    # Display information about Ibua SES
    render :layout=>false
  end

  def rvk_info
    # Display information about the city of Reykjavik
    render :layout=>false
  end

  def priority_info
    # Display information about a given priority
    @priority_id = params[:priority_id].to_i
    @neighborhood_id = params[:neighborhood_id].to_i
    ballot = ReykjavikBudgetBallot.current
    @name = ballot.get_priority_name(@neighborhood_id,@priority_id)
    @description = ballot.get_priority_description(@neighborhood_id,@priority_id)
    @link = ballot.get_priority_link(@neighborhood_id,@priority_id)
    Rails.logger.info(@link)
    @link = nil if @link=="-- no Hyperlink --"
    render :layout=>false
  end

  def logout_info
    # Display information about loging out
    render :layout=>false
  end

  def logout
    # Logout and reset the session
    reset_session
    redirect_to "/"
  end

  def authentication_options
    # Display authentication options
    @island_is_url = @config.rsk_url
  end

  def authenticate_from_island_is
    # The redirect return point from the external island.is authentication
    if perform_island_is_token_authentication(params[:token],request)
      session[:have_authenticated_and_been_approved]=true
      redirect_to :action=>:select_area
    else
      Rails.logger.error("No identity from island.is for session id: #{request.session_options[:id]}")
      if @on_voters_register
        flash[:notice]=t :island_is_auth_error_general
      else
        flash[:notice]=t :island_is_auth_error_not_on_voter_register
      end
      redirect_to :action=>:authentication_options
    end
  end

  def check_authentication
    # The root method that checks if authentication has been completed and redirects to area selection if authentication has been confirmed
    if request.session_options[:id] and Rails.cache.read(request.session_options[:id]) and session[:have_authenticated_and_been_approved]
      redirect_to :action=>:select_area
    elsif params[:token]
      redirect_to :action=>:authenticate_from_island_is, :token=>params[:token]
    else
      redirect_to :action=>:authentication_options
    end
  end

  def select_area
    # Select the voting area

    # Check to see if the user has been authenticated and if the voter identity hash is available
    unless voter_identity_hash = Rails.cache.read(request.session_options[:id])
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
      flash[:notice]= t :votes_timeout_1
      redirect_to :action=>:authentication_options
      return false
    end
    @help_info_text = t :votes_help_select_area
  end

  def get_ballot
    # Get the ballot and display it to the user

    # Write a fake identity when not running in production mode
    unless Rails.env.production?
      Rails.cache.write(request.session_options[:id],request.session_options[:id]) unless Rails.cache.read(request.session_options[:id])
    end

    # Try to read the vote identity and redirect to authentication error if not found
    unless voter_identity_hash = Rails.cache.read(request.session_options[:id])
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
      flash[:notice]= t :votes_timeout_1
      redirect_to :action=>:authentication_options
      return false
    end

    # Set the neighborhood id from url parameters
    @neighborhood_id = params[:neighborhood_id].to_i

    # Create the Reykjavik Budget Ballot
    @reykjavik_budget_ballot = ReykjavikBudgetBallot.current

    # Get the budget for the given neighborhood id
    @total = @reykjavik_budget_ballot.get_neighborhood_budget(@neighborhood_id)

    # Letters are used to mark each budget vote selection
    @letter_of_alphabet = ReykjavikBudgetBallot::ALLOWED_BALLOT_CHARACTERS

    # Count how many times this particular voter has voted
    @vote_count = Vote.where(:user_id_hash=>voter_identity_hash).count
    @help_info_text = t :votes_help_get_ballot
  end

  def post_vote
    # The encrypted vote submitted by the user

    # Try to read the vote identity and redirect to authentication error if not found
    if request.session_options[:id] and voter_identity_hash = Rails.cache.read(request.session_options[:id])
      # Save the vote to the database
      encrypted_vote_checksum = Vote.generate_encrypted_checksum(voter_identity_hash,params[:vote],request.remote_ip,params[:neighborhood_id],request.session_options[:id])
      if Vote.create(:user_id_hash => voter_identity_hash, :payload_data => params[:vote],
                     :client_ip_address => request.remote_ip, :neighborhood_id =>params[:neighborhood_id],
                     :session_id => request.session_options[:id], :encrypted_vote_checksum => encrypted_vote_checksum)
        # Count how many times this particular voter has voted
        vote_count = Vote.where(:user_id_hash=>voter_identity_hash).count
        Rails.logger.info("Saved vote for session id: #{request.session_options[:id]}")
        response = [:error=>false, :message=>t(:votes_post_results_4), :vote_ok=>true, :vote_count=>"#{t :votes_post_results_vote_count} #{vote_count}"]
      else
        Rails.logger.error("Could not save vote for session id: #{request.session_options[:id]}")
        response = [:error=>true, :message=>t(:votes_post_results_2), :vote_ok=>false]
      end
    else
      response = [:error=>true, :message=>t(:votes_timeout_2), :vote_ok=>false]
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
    end

    respond_to do |format|
      format.json { render :json => response }
    end
  end

  private

  def log_session_id
    Rails.logger.info("Session id: #{request.session_options[:id]}")
  end

  def saml_settings
    settings = Onelogin::Saml::Settings.new

    settings.assertion_consumer_service_url = "https://egov.webservice.is/saml/consume"
    settings.issuer                         = request.host
    settings.idp_sso_target_url             = "https://ktest.betrireykjavik.is/#{OneLoginAppId}"
    settings.idp_cert_fingerprint           = OneLoginAppCertFingerPrint
    settings.name_identifier_format         = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
    # Optional for most SAML IdPs
    settings.authn_context = "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport"

    settings
  end


  def saml_verification(raw)
  end

  def perform_island_is_token_authentication(token,request)
    # Call island.is authentication service to verify the authentication token
    begin
      # Setup the island.is SOAP connection
      soap_url = "https://egov.webservice.is/sst/runtime.asvc/com.actional.soapstation.eGOV_SKRA_KosningAudkenning?WSDL"
      soap = SOAP::WSDLDriverFactory.new(soap_url).create_rpc_driver
      soap.options["protocol.http.basic_auth"] << [soap_url,@config.rsk_soap_username,@config.rsk_soap_password]

      # Get SAML response from island.is
      @response = soap.generateElectionSAMLFromToken(:token => token, :ipAddress=>request.remote_ip,
                                                     :electionId=>"CA8796EE-7239-497A-96FE-156419E4F9BA", :svfNr=>%w{0000})

      #response_test          = Onelogin::Saml::Response.new(@response)
      #response_test.settings = saml_settings

      #Rails.logger.info("SAML Valid response: #{response_test.is_valid?}")

      # Check and see if the response is a success
      if @response and @response.status and @response.status.message=="Success"
        national_identity_hash = Nokogiri.parse(@response.saml).root.xpath("//blarg:Attribute[@AttributeName='SSN']", {"blarg" => 'urn:oasis:names:tc:SAML:1.0:assertion'}).text
      else
        raise "Authentication was not a success #{@response.inspect}"
      end

      Rails.logger.error(@response.inspect)

      raw_known_x509_cert = File.open("config/egov.webservice.is.cert")
      known_x509_cert = OpenSSL::X509::Certificate.new raw_known_x509_cert

      start_token_start = @response.inspect.index("X509Certificate")
      end_token_start = @response.inspect.rindex("X509Certificate")

      test_x509_cert = "-----BEGIN CERTIFICATE-----#{@response.inspect[start_token_start+16..end_token_start-6]}-----END CERTIFICATE-----\n"

      raise "Failed to verify x509 cert" unless known_x509_cert.to_s.gsub("\n","") == test_x509_cert.gsub("\n","")

      # Write the national identity hash to memcache under our session id
      if national_identity_hash and national_identity_hash!=""
        Rails.cache.write(request.session_options[:id],national_identity_hash)
      end
      Rails.logger.info("Authentication successful for #{national_identity_hash} #{@response.inspect}")
      return true
    rescue  => ex
      Rails.logger.error(ex.to_s+"\n\n"+ex.backtrace.to_s)
      Rails.logger.error(@response.inspect)
      if @response.status.code=="8"
        @on_voters_register = false
      else
        @on_voters_register = true
      end
      return false
    end
  end
end