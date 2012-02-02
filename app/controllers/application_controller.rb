class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :get_db_config

  def get_db_config
    @db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
  end
end