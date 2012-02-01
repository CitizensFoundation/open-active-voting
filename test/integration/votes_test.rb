require "rubygems"
require "test/unit"
require "watir-webdriver"
require 'test_helper'

class VoteThroughBrowsers < ActionController::IntegrationTest

  def setup
    @db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
  end

  def teardown
    @browser.close if @browser
  end

  test "test_vote_through_firefox" do
    @browser ||= Watir::Browser.new :firefox
    perform_main_browser_test
  end

  test "test_vote_through_firefox" do
    @browser ||= Watir::Browser.new :firefox
    perform_main_browser_test
  end


  def perform_main_browser_test
    setup_votes
    @votes.each do |vote|
      @browser.goto "http://localhost:3000/votes/ballot"
      setup_checkboxes(vote)
      @browser.button.click
      @browser.div(:id => "success_message").wait_until_present
      success_value = @browser.div(:id => "success_message").value
      Rails.logger.debug success_value
    end
    @browser.close
    assert vote_match?
  end

  def vote_match?
    Vote.all.each do |vote| puts vote.inspect end
    database_count = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    database_count.count_all_votes(false)
    puts database_count.inspect
    test_count = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    test_count.count_all_test_votes(@votes)
    puts test_count.inspect
    (test_count.construction_priority_ids_count == database_count.construction_priority_ids_count &&
     test_count.maintenance_priority_ids_count == database_count.maintenance_priority_ids_count) ? true : false
  end

  def setup_votes
    @votes = []
    20.times do
      seen = {}
      construction_votes = (1..(rand(7)+2)).map { |n|
                              x = rand(12)+1
                              while (seen[x])
                                x = rand(12)+1
                              end
                              seen[x]=x
                              x
                            }
      seen = {}
      maintenance_votes = (1..(rand(7)+2)).map { |n|
                              x = rand(12)+14
                              while (seen[x])
                                x = rand(12)+14
                              end
                              seen[x]=x
                              x
                            }

      @votes << [construction_votes,maintenance_votes]
    end
  end

  def setup_checkboxes(vote_types)
    vote_types.each do |vote|
      vote.each do |checkbox_to_set|
        @browser.checkbox(:value => checkbox_to_set.to_s).set
      end
    end
  end
end