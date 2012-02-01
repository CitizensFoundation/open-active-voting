require "rubygems"
require "test/unit"
require "watir-webdriver"
require 'test_helper'

class VoteThroughBrowsers < ActionController::IntegrationTest

  def setup
    @db_config = YAML::load(File.read(Rails.root.join("config","database.yml")))
    @firefox_browser = Watir::Browser.new :firefox
    @chrome_browser  = Watir::Browser.new :chrome
    @votes = []
    setup_votes
  end

  def teardown
    @firefox_browser.close
    @chrome_browser.close
  end

  test "vote_through_firefox_and_chrome" do
    @votes.each do |vote|
      browser = [@firefox_browser,@chrome_browser][rand(2)]
      browser.goto "http://localhost:3000/votes/ballot"
      setup_checkboxes(browser,vote)
      browser.button.click
      browser.div(:id => "success_message").wait_until_present
    end
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
    10.times do
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

  def setup_checkboxes(browser,vote_types)
    vote_types.each do |vote|
      vote.each do |checkbox_to_set|
        browser.checkbox(:value => checkbox_to_set.to_s).set
      end
    end
  end
end