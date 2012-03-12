# coding: utf-8

class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :get_db_config

  before_filter :session_expiry, :except => [:authentication_options,:check_authentication,:authenticate_from_island_is]
  before_filter :update_activity_time

  before_filter :set_locale

  def set_locale
    if params[:locale]
      I18n.locale = params[:locale]
      session[:locale] = params[:locale]
    elsif session[:locale]
      I18n.locale = session[:locale]
    end
  end

  def session_expiry
    # Expire the session if the session has timed out
    Rails.logger.info("Session expires at #{session[:expires_at]}")
    if session[:expires_at]
      @time_left = (session[:expires_at] - Time.now).to_i
      unless @time_left > 0
        Rails.logger.info("Resetting session")
        reset_session
        respond_to do |format|
          format.html {
            flash[:notice] = 'Auðkenning er fallinn úr gildi, vinsamlegast auðkennist aftur.'
            redirect_to '/votes/authentication_options'
          }
          format.js {
            render :update do |page|
              page << "$('#content').html(\"<div id='success_message'> </div><div id='message'><p>Auðkenning þín er fallin úr gildi, þú hefur 20 mín. til að kjósa og hefur farið yfir þann tíma. Smelltu <a href='/'>hér til að auðkenna þig og kjósa aftur.</a></p></div>\");"
            end
          }
        end
        return false
      end
    end
  end

  def update_activity_time
    # Update the activity time to keep the user session alive
    if Rails.env.test?
      session[:expires_at] = 600.hours.from_now
    else
      session[:expires_at] = 1.minutes.from_now
    end
  end

  def get_db_config
    @db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
  end
end