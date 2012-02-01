require "rubygems"
require "test/unit"
require "watir-webdriver"
require 'test_helper'

class VoteThroughBrowsers < ActionController::IntegrationTest
  test "test_vote_through_firefox" do
    db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
    @browser ||= Watir::Browser.new :firefox

    10.times do
      @browser.goto "http://ktest.betrireykjavik.is/votes/get_ballot"
      setup_checkboxes
      @browser.button.click
      @browser.div(:id => "success_message").wait_until_present
      success_value = @browser.div(:id => "success_message").value
      Rails.logger.debug success_value
      assert @browser.text.include?("success")
    end
  end

  def teardown
    @browser.close
  end

  def setup_checkboxes
    20.times do
      @browser.checkbox(:value => "#{rand(26)+1}").set
    end
  end
end