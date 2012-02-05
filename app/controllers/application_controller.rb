class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :get_db_config

  before_filter :session_expiry, :except => [:authentication_options]
  before_filter :update_activity_time

  def update_activity_time
    session[:expires_at] = 2.minutes.from_now
  end

  def session_expiry
    Rails.logger.info("Session expires at #{session[:expires_at]}")
    if session[:expires_at]
      @time_left = (session[:expires_at] - Time.now).to_i
      unless @time_left > 0
        Rails.logger.info("Resetting session")
        reset_session
        flash[:notice] = 'Your session has expired.'
        if request.xhr?
          render :update do |page|
            page << "$('#content').html(\"<div id='success_message'> </div><div id='message'><p>Auðkenning þín er dottinn úr gildi, þú hefur 20 til að kjósa og hefur farin yfir þann tíma. Smelltu <a href='/'>hér til að auðkenna þig og kjósa aftur.</a></p></div>\");"
          end
        else
          redirect_to '/'
        end
        return false
      end
    end
  end

  def get_db_config
    @db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
  end
end