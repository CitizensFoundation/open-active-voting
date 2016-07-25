# coding: utf-8

# Copyright (C) 2010-2016 City of Reykjavik, Íbúar ses
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

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_filter :get_db_config
  before_filter :manage_sessions, :except => [:check_authentication, :authentication_options, :authenticate_from_island_is,
                                              :help_info, :about_info, :rules_info, :government_info,
                                              :areas_info, :ibuar_info, :rvk_info, :idea_info,
                                              :logout_info, :lukr_map, :lukr_map_2]

  before_filter :set_locale
  before_filter :load_public_key

  def load_public_key
    @public_key = @config.public_key
  end

  def set_locale
    if params[:locale]
      I18n.locale = params[:locale]
      session[:locale] = params[:locale]
    elsif session[:locale]
      I18n.locale = session[:locale]
    else
      I18n.locale = "is"
    end
  end

  def manage_sessions
    session_expiry
    update_activity_time
  end

  def session_expiry
    # Expire the session if the session has timed out
    Rails.logger.info("Session expires at #{session[:expires_at]}")
    if session[:expires_at]
      @time_left = (Time.parse(session[:expires_at]) - Time.now).to_i
      Rails.logger.info("Time now #{Time.now} time left #{@time_left}")
      unless @time_left > 0
        Rails.logger.info("Resetting session")
        reset_session
        respond_to do |format|
          format.json {
            response = [:error=>true, :message=>t(:votes_timeout_2), :vote_ok=>false]
            Rails.logger.error("Session expired.")
          }
        end
        return false
      end
    end
  end

  def update_activity_time
    # Update the activity time to keep the user session alive
    unless Rails.env.production?
      session[:expires_at] = 600.hours.from_now
    else
      session[:expires_at] = (@config.timeout_in_seconds).seconds.from_now
    end
  end

  def get_db_config
    @config = BudgetConfig.current
  end
end
