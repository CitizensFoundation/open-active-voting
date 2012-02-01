require "rubygems"
require "test/unit"
require "watir-webdriver"
require 'test_helper'

class VoteThroughBrowsers < ActionController::IntegrationTest
  test "test_vote_through_chrome" do
    db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
    @browser ||= Watir::Browser.new :firefox
    @browser.goto "http://robert:#{db_config[Rails.env]['http_test_password']}@ktest.betrireykjavik.is/votes/get_ballot"
    @browser.checkbox(:value => '1').set
    @browser.checkbox(:value => '2').set
    @browser.checkbox(:value => '3').set
    @browser.checkbox(:value => '4').set
    @browser.button.click
    @browser.div(:id => "success_message").wait_until_present
    assert @browser.div(:id => "success_message") == "success"
    @browser.close
  end
end