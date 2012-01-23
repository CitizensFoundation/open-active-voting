class VotesController < ApplicationController
  def authentication_options
    @island_is_url = DB_CONFIG[RAILS_ENV]['island_is_url']
  end

  def authenticate_from_island_is
    if Vote.authenticate_from_island_is(params[:token],request)
      redirect_to :action=>:authentication_error
    else
      redirect_to :action=>:get_ballot
    end
  end

  def authentication_error
  end

  def get_ballot
    unless voter_national_identity_hash = Rails.cache.read(request.session_options[:id])
      redirect_to :action=>:authentication_error
      return false
    end
    @vote_count = Vote.count(:user_id_hash=>voter_national_identity_hash)
  end

  def post_vote
    voter_national_identity_hash = Rails.cache.read(request.session_options[:id])
    unless voter_national_identity_hash
      response = [:error=>true, :message=>"Not logged in", :vote_ok=>false]
    else
      user_id_and_payload_hash = Digest::MD5.hexdigest(voter_national_identity_hash+params[:payload_data])
      if Vote.create(:user_id_hash=>voter_national_identity_hash, :payload_data => params[:payload_data],
                     :localtime=>Time.now, :client_ip_address=>request.ip_address, :user_id_and_payload_hash=>user_id_and_payload_hash)
        response = [:error=>false, :message=>"Vote created", :vote_ok=>true]
      else
        response = [:error=>true, :message=>"Could not create vote", :vote_ok=>false]
      end
    end
    respond_to do |format|
      format.json { render :json => response }
    end
  end
end