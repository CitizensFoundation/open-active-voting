# coding: utf-8

# Copyright (C) 2010-2018 Íbúar ses / Citizens Foundation Iceland
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

class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  # before_filter :p3p
  before_action :get_db_config
  before_action :set_locale
  before_action :load_public_key
  after_action :print_headers
  before_action :start_session

  def start_session
    session[:started] = true
  end

  def p3p
    response.headers['P3P'] = "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
  end

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

  def get_db_config
    @config = BudgetConfig.current
  end

  def print_headers
    Rails.logger.info(response.headers.to_s)
  end

end
