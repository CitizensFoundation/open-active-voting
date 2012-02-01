class VotesController < ApplicationController

  after_filter :log_session_id

  def log_session_id
    Rails.logger.info("Session id: #{request.session_options[:id]}")
  end

  def authentication_options
    @island_is_url = DB_CONFIG[RAILS_ENV]['island_is_url']
  end

  def authenticate_from_island_is
    if Vote.authenticate_from_island_is(params[:token],request)
      Rails.logger.error("No identity from island.is for session id: #{request.session_options[:id]}")
      redirect_to :action=>:authentication_error
    else
      redirect_to :action=>:get_ballot
    end
  end

  def authentication_error
  end

  def get_ballot
    @neighborhood_id = params[:neighborhood_id] ? params[:neighborhood_id] : 99
    Rails.cache.write(request.session_options[:id],request.session_options[:id]) unless Rails.cache.read(request.session_options[:id])
    unless voter_identity_hash = Rails.cache.read(request.session_options[:id])
      Rails.logger.error("No identity for session id: #{request.session_options[:id]}")
      redirect_to :action=>:authentication_error
      return false
    end
    @reykjavik_budget_ballot = ReykjavikBudgetBallot.new
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
end