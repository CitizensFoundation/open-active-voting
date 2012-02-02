require 'digest/sha1'
require 'nokogiri'
require 'soap/rpc/driver'
require 'soap/wsdlDriver'

class VotesController < ApplicationController

  after_filter :log_session_id

  def log_session_id
    Rails.logger.info("Session id: #{request.session_options[:id]}")
  end

  def authentication_options
    @island_is_url = @db_config[Rails.env]['rsk_url']
  end

  def authenticate_from_island_is
    if perform_island_is_token_authentication(params[:token],request)
      session[:have_authenticated_and_been_approved]=true
      redirect_to :action=>:get_ballot
    else
      Rails.logger.error("No identity from island.is for session id: #{request.session_options[:id]}")
      flash[:notice]="Authentication Error!!!"
      redirect_to :action=>:authentication_error
    end
  end

  def authentication_error
  end

  def check_authentication
    if request.session_options[:id] and Rails.cache.read(request.session_options[:id]) and session[:have_authenticated_and_been_approved]
      redirect_to :action=>:get_ballot
    elsif params[:token]
      redirect_to :action=>:authenticate_from_island_is, :token=>params[:token]
    else
      redirect_to :action=>:authentication_options
    end
  end

  def ballot
    session[:start]=true
    redirect_to :action=>:get_ballot
  end

  def get_ballot
    @neighborhood_id = params[:neighborhood_id] ? params[:neighborhood_id] : 99

    # Write a fake identity when running in development mode
    Rails.cache.write(request.session_options[:id],request.session_options[:id]) unless Rails.cache.read(request.session_options[:id]) if Rails.env.dev?

    # Try to read the vote identity and redirect to authentication error if not found
    unless voter_identity_hash = Rails.cache.read(request.session_options[:id])
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
      flash[:notice]="Please authenticate"
      redirect_to :action=>:authentication_error
      return false
    end

    # Create the Reykjavik Budget Ballot
    @reykjavik_budget_ballot = ReykjavikBudgetBallot.new

    # Count how many times this particular voter has voted
    @vote_count = Vote.where(:user_id_hash=>voter_identity_hash).count
  end

  def post_vote
    unless voter_identity_hash = Rails.cache.read(request.session_options[:id])
      response = [:error=>true, :message=>"Not logged in", :vote_ok=>false]
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
    else
      if Vote.create(:user_id_hash=>voter_identity_hash, :payload_data => params[:vote],
                     :localtime=>Time.now, :client_ip_address=>request.remote_ip, :neighborhood_id =>params[:neighborhood_id])
        Rails.logger.info("Saved vote for session id: #{request.session_options[:id]}")
        response = [:error=>false, :message=>"Vote created", :vote_ok=>true]
      else
        Rails.logger.error("Could not save vote for session id: #{request.session_options[:id]}")
        response = [:error=>true, :message=>"Could not create vote", :vote_ok=>false]
      end
    end
    respond_to do |format|
      format.json { render :json => response }
    end
  end

  private

  def perform_island_is_token_authentication(token,request)
    begin
      soap_url = "https://egov.webservice.is/sst/runtime.asvc/com.actional.soapstation.eGOV_SKRA_KosningAudkenning?WSDL"
      soap = SOAP::WSDLDriverFactory.new(soap_url).create_rpc_driver
      Rails.logger.info("#{}")
      soap.options["protocol.http.basic_auth"] << [soap_url,@db_config[Rails.env]['rsk_soap_username'],@db_config[Rails.env]['rsk_soap_password']]
      @response = soap.generateElectionSAMLFromToken(token,:token => token)
      if @response and @response[0] and @response[0].message="Success"
        elements = Nokogiri.parse(@response[1])
        name = elements.root.xpath("//blarg:NameIdentifier", {'blarg' => 'urn:oasis:names:tc:SAML:1.0:assertion'}).first.text
        national_identity_hash = elements.root.xpath("//blarg:Attribute[@AttributeName='SSN']", {'blarg' => 'urn:oasis:names:tc:SAML:1.0:assertion'}).text
      else
        raise "Message was not a success #{@response.inspect}"
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