# Copyright (C) 2010-2013,2013 Íbúar ses
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

require "rubygems"
require "test_helper"
require "watir-webdriver"
require 'test_helper'
require "#{Rails.root}/db/seeds.rb"

class VoteThroughBrowsers < ActionDispatch::IntegrationTest
  def setup
    @max_browsers = 5
    @max_votes = 10
    @area_ids = [1,3]
    #@area_ids = [1,2,3] #,4,5,6,7,8,9,10]

    if !!(RbConfig::CONFIG['host_os'] =~ /mingw|mswin32|cygwin/)
      @browser_types = [:firefox,:chrome,:ie]
    elsif ENV['HEADLESS']
      @browser_types = [:chrome]
    elsif false
      @browser_types = [:chrome]
    else
      @browser_types = [:chrome]
      #@browser_types = [:firefox, :chrome]
    end

    if ENV['HEADLESS']
      require 'headless'
      @headless = Headless.new
      @headless.start
    end

    @browsers = []
    @max_browsers.times do
      @browsers << Watir::Browser.new(@browser_types[rand(@browser_types.length)])
    end
    @votes = []
    @user_browser_votes = Hash.new
    @browsers.each do |browser|
      @user_browser_votes[browser] = []
    end

    @database_csv_filenames = []
    @test_csv_filenames = []

    FileUtils.rm_rf File.join(Rails.root.join("test","results"))
    Dir.mkdir(File.join(Rails.root.join("test","results")))
  end

  def teardown
    @browsers.each do |browser|
      browser.close
    end
    if ENV['HEADLESS']
      @headless.destroy
    end
  end

  test "vote_through_firefox_and_chrome" do
    (1..@max_votes).each do |index|
      browser = @browsers[rand(@browsers.length)]
      @current_area_id = area_id = @area_ids[rand(@area_ids.length)]
      browser.goto "http://localhost:3000"
      browser.goto "http://localhost:3000/#/area-ballot/#{area_id}"
      sleep 3
      retry_count = 0
      user_votes = nil
      setup_checkboxes(browser)
      user_votes = {:area_id=>area_id, :votes=>get_user_votes(browser)}
      script = "(function() {
      var voteElements = document
                    .querySelector('oav-app')
                    .querySelector('oav-area-budget')
                    .querySelector('#votingButton').click();
      })();"
      browser.execute_script(script)
      @user_browser_votes[browser] << user_votes
      sleep 1
    end
    assert all_vote_match?(all_votes), "All individual votes matched"
    assert unique_vote_match?, "All unique votes matched"
    assert identical_csv_files?, "Database and test csv files are identical"
  end

  def get_user_votes(browser)
    puts "get_user_votes"
    votes = []

     script = "
        var app = document.querySelector('oav-app')
        var budget = app.querySelector('oav-area-budget');
        var voteElements = budget.querySelectorAll('.budgetBallotVote');
        var voteIds = [];
        Array.from(voteElements).forEach(voteElement => {
          var voteId = voteElement.id.split('_').pop();
          voteIds.push(parseInt(voteId));
        });
        return voteIds;"
     votes = browser.execute_script(script)
     puts "exec script before"
     puts "VOTES FROM BROWSER: #{votes.sort}"
    votes.sort
  end

  def all_votes
    all_votes_array = []
    @user_browser_votes.each do |browsers,vote_values|
      vote_values.each do |vote_value|
        all_votes_array<<vote_value[:votes]
      end
    end
    puts "ALL V "+all_votes_array.to_s
    all_votes_array
  end

  def get_unique_votes(area_id)
    unique_votes = []
    @user_browser_votes.each do |browsers,votes|
      votes.each do |vote|
        unique_votes<<vote[:votes] if vote and vote[:area_id] == area_id
      end
    end
    unique_votes
  end

  def unique_vote_match?
    puts "All votes for unique_vote_match?"
    votes.each do |vote| puts vote.inspect end # DEBUG
    all_passed = true
    Vote.split_and_generate_final_votes!
    @area_ids.each do |area_id|
      puts "Area id #{area_id}"
      puts "Count unique votes from database"
      database_count = BudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
      @database_csv_filenames << database_count.count_unique_votes(area_id)
      database_count.write_counted_unencrypted_audit_report

      test_count = BudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
      test_count.count_all_test_votes_from_browser(get_unique_votes(area_id),area_id)
      @test_csv_filenames << test_count.write_voting_results_report("test_voting_results.csv")

      puts "Test: Browser: #{test_count.item_ids_count} == Database: #{database_count.item_ids_count}"

      match = (test_count.item_ids_count == database_count.item_ids_count) ? true : false
      unless match
        puts "FAILED"
        all_passed = false
        break
      end
    end
    all_passed
  end

  def identical_csv_files?
    all_passed = true
    @area_ids.each_with_index do |area_id,index|
       match = File.open(Rails.root.join("test","results",@database_csv_filenames[index])).read.to_s == File.open(Rails.root.join("test","results",@test_csv_filenames[index])).read.to_s
       unless match
        puts "FAILED"
        all_passed = false
        break
      end
    end
    all_passed
  end

  def all_vote_match?(browser_votes)
    puts "All browser votes"
    browser_votes.each do |vote| puts vote.inspect end # DEBUG

    puts "Counting all database votes"
    database_count = BudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    database_count.count_all_votes
    puts "All counted votes from database: #{Vote.count} #{database_count.item_ids_count}"

    puts "Counting all browser votes"
    test_count = BudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    test_count.count_all_test_votes_from_browser(browser_votes)
    puts "All counted votes from browser: #{browser_votes.count} #{test_count.item_ids_count}"

    (test_count.item_ids_count == database_count.item_ids_count) ? true : false
  end

  def setup_checkboxes(browser)
    puts "setup_checkboxes"
    sleep 1
    script = "(function() {
      var app = document.querySelector('oav-app');
      var ballot = app.querySelector('oav-area-ballot');
      var allItems = Array.prototype.slice.call(ballot.querySelectorAll('.ballotAreaItem'));

      var maximum = 20;
      var minimum = 7;
      var size = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      var shuffledItems = allItems.slice(0), i = allItems.length, min = i - size, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffledItems[index];
        shuffledItems[index] = shuffledItems[i];
        shuffledItems[i] = temp;
      }
      shuffledItems = shuffledItems.slice(min);
      var arrayLength = shuffledItems.length;
      for (var i = 0; i < arrayLength; i++) {
        shuffledItems[i].$$('#addToBudgetButton').click();
      }
    })();"

    puts "Execute script"

    browser.execute_script(script)

    puts "All options in browser"
  end
end
