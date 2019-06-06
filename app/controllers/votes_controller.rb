# coding: utf-8

# Copyright (C) 2010-2019 Íbúar ses / Citizens Foundation Iceland
# Authors Robert Bjarnason, Gunnar Grimsson, Gudny Maren Valsdottir & Alexander Mani Gautason
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

DSIG = "http://www.w3.org/2000/09/xmldsig#"

class VotesController < ApplicationController

  before_action :log_session_id

  # Logout and reset the session
  def logout
    Rails.logger.info("Logout")
    reset_session
  end

  # Send the config and public key to the client app
  def boot
    respond_to do |format|
      format.json { render :json => { :config => @config, :public_key => @public_key } }
    end
  end

  # Used for BOTs to show dynamic meta data
  def meta
    @meta = @config.client_config["shareMetaData"]
    respond_to do |format|
      format.html
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
                                     area_voter_count: Vote.where.not(:saml_assertion_id=>nil).group(:area_id).distinct.count(:user_id_hash),
                                     total_voter_count: Vote.where.not(:saml_assertion_id=>nil).distinct.count(:user_id_hash)
      }}
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
    I18n.locale = "en"
    @area = BudgetBallotArea.where(:id => params[:area_id].to_i).first
    if params[:locale]
      I18n.locale = params[:locale]
    else
      I18n.locale = "en"
    end
    @budget_ballot_items = BudgetBallotItem.where(:budget_ballot_area_id=> @area.id).all

    respond_to do |format|
      format.json { render :json =>  {:area=>@area, :budget_ballot_items => @budget_ballot_items } } #, methods: [:name_is, :name_en, :name_pl, :description_is, :description_en, :description_pl]}
    end
  end

  # Encrypted vote posted by the user
  def post_vote

    # Try to read the vote identity and redirect to authentication error if not found
    if request.session_options[:id]

      # Hide IP address if needed
      ip_address = DO_NOT_LOG_IP_ADDRESSES == false ? request.remote_ip : "n/a"

      # Save the vote to the database as not authenticated
      if Vote.create(:user_id_hash => "not authenticated",
                     :payload_data => params[:encrypted_vote],
                     :client_ip_address => ip_address,
                     :area_id =>params[:area_id],
                     :saml_assertion_id=> ENV["FAKE_VOTING"] ? "fake" : nil,
                     :session_id => request.session_options[:id],
                     :encrypted_vote_checksum => "not authenticated")

        Rails.logger.info("Saved vote for session id: #{request.session_options[:id]}")
        response = {:error=>false, :vote_ok=>true}
      else
        Rails.logger.error("Could not save vote for session id: #{request.session_options[:id]}")
        response = {:error=>true, :vote_ok=>false}
      end
    else
      Rails.logger.error("No session id")
      response = {:error=>true, :vote_ok=>false}
    end

    respond_to do |format|
      format.json { render :json => response }
    end
  end

  def is_vote_authenticated
    if request.session_options[:id]
      # Find the previously stored wote from the session id that has been authenticated
      vote = Vote.where(:session_id=>request.session_options[:id]).where.not(:saml_assertion_id=>nil).first;
      response = {:error=>false, :vote_ok=> vote!=nil ? true : false}
    else
      Rails.logger.error("No session: #{request.session_options[:id]}")
      response = {:error=>true, :vote_ok=>false}
    end

    respond_to do |format|
      format.json { render :json => response }
    end
  end

  # For smaller projects with no access to secure logins and for testing purposes
  def insecure_email_login
    if ENV["INSECURE_EMAIL_LOGIN_ENABLED"]
      insecure_email = params[:insecure_email]
      postcode = params[:postCode]
      # Find the previously stored wote from the session id that has not been authenticated before
      vote = Vote.order("created_at DESC").where(:session_id=>request.session_options[:id], :saml_assertion_id=>nil).first

      if vote
        # Create an encrypted checksum
        encrypted_vote_checksum = Vote.generate_encrypted_checksum(insecure_email,
                                       vote.payload_data,vote.client_ip_address,vote.area_id,request.session_options[:id])

        # Update the values for the vote and confirm it as being authenticated
        vote.encrypted_vote_checksum = encrypted_vote_checksum
        vote.user_id_hash = insecure_email
        vote.authenticated_at = Time.now
        vote.user_postcode = postcode
        vote.saml_assertion_id = -1
        vote.save
        respond_to do |format|
          format.json { render :json => {:ok=>true} }
        end
      else
        raise "Authentication was not a success vote not found for insecure email"
      end
    else
      raise "Trying to use insecure email login when not enabled"
    end
  end

  private

  def log_session_id
    Rails.logger.info("Session id: #{request.session.id}")
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
        saml_assertion = nil
        if SamlAssertion.where(:assertion_id=>assertion_id).first
          raise "Duplicate SAML 2 assertion error"
        else
          saml_assertion = SamlAssertion.create!(:assertion_id=>assertion_id)
        end
        if  saml_assertion.id == nil or saml_assertion.id == ""
          raise "SAML Assertion id not found #{@response.inspect}"
        end
      else
        raise "Authentication was not a success saml_validation_response #{@response.inspect}"
      end

      Rails.logger.info(@response.response)

      # Find the previously stored wote from the session id that has not been authenticated before
      vote = Vote.order("created_at DESC").where(:session_id=>request.session_options[:id], :saml_assertion_id=>nil).first

      if vote
        # Create an encrypted checksum
        encrypted_vote_checksum = Vote.generate_encrypted_checksum(national_identity_hash,
                                       vote.payload_data,vote.client_ip_address,vote.area_id,request.session_options[:id])

        # Update the values for the vote and confirm it as being authenticated
        vote.encrypted_vote_checksum = encrypted_vote_checksum
        vote.user_id_hash = national_identity_hash
        vote.authenticated_at = Time.now
        vote.saml_assertion_id = saml_assertion.id
        vote.save
      else
        # TODO: Save this for app to pick up
        raise "Authentication was not a success vote not found #{@response.inspect}"
      end

      Rails.logger.info("Authentication and vote completion successful for #{national_identity_hash} #{@response.inspect}")
      return true
    rescue  => ex
      notify_airbrake(ex)
      Rails.logger.error(ex.to_s+"\n\n"+ex.backtrace.to_s)
      Rails.logger.error(@response.inspect)
      return false
    end
  end
end
