# coding: utf-8

require "csv"
#require "ap"
require 'net/http'
require 'net/https'

# docker run --net=host -e "RAILS_ENV=production" -e "infile=/var/import/okkarmosov1.csv"  -v /root/open-active-voting:/home/app/oav_website -v /root/import:/var/import oav2 /bin/sh -c "cd /home/app/oav_website;bundle exec rake db:drop;bundle exec rake db:create;bundle exec rake db:schema:load;bundle exec rake mosfellsbaer_2017_ballot:reset_votes_get_ballot_data_from_csv"

class Array
  def shuffle
    sort_by { rand }
  end
end

namespace :growing_gaelic_2017_ballot do

  def create_budget_gaelic_ballot_item(area_id, budget_data, row_number)
    idea_id = budget_data[row_number][0]
    puts "HELLO"
    puts idea_id
    puts budget_data[row_number]
    price = budget_data[row_number][3]
    price = price.gsub(',','')
    price = price.gsub('£','')
    puts price

    name_en = budget_data[row_number][2]
    puts name_en

    description_en =  budget_data[row_number][4]
    idea_url =  budget_data[row_number][5]
    puts idea_url

    puts "IDEA iD #{idea_id}"
    if idea_id
      post_url = "https://www.betraisland.is/api/posts/"+idea_id
      encoded_url = URI.encode(post_url)
      uri = URI(encoded_url)
      res = Net::HTTP.get(uri)
      puts res
      #res = Net::HTTP.get URI(post_url)
      post_json = JSON.parse(res)
      if post_json["PostHeaderImages"] and post_json["PostHeaderImages"].length>0
        puts post_json["PostHeaderImages"][0]
        image_url = JSON.parse(post_json["PostHeaderImages"][post_json["PostHeaderImages"].length-1]["formats"])[0]
        puts image_url
      else
        image_url = "https://i.imgur.com/sdsFAoT.png"
      end
    else
      idea_id = 99999
    end

    item = BudgetBallotItem.create!(:price=>price,
                                    :idea_id=>idea_id,
                                    :budget_ballot_area_id=>area_id,
                                    :locations=>nil,
                                    :image_url=>image_url,
                                    :idea_url=>idea_url)

    puts "ITEM ------------"
    puts item.to_s
    puts "================="

    I18n.locale = "en"
    item.name = name_en
    item.description = description_en
    item.save
    puts "========================================================="
  end

  def import_gaelic_area_data(area_id, budget_data, start_row_number, total_number_of_rows=25)
    puts "import_area_data"
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      create_budget_gaelic_ballot_item(area_id, budget_data, current_row_number)
      current_row_number +=1
    end
  end

  desc "Clear all votes"
  task(:empty_ballot_box => :environment) do
    puts "Before: #{Vote.count}"
    Vote.delete_all
    FinalSplitVote.delete_all
    puts "After: #{Vote.count}"
  end

  desc "Reset All Ballot Data from CSV"
  task(:reset_votes_get_ballot_data_from_csv => :environment) do
    Vote.delete_all
    FinalSplitVote.delete_all
    BudgetBallotItem.delete_all
    ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_items")
    BudgetBallotArea.delete_all
    ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_areas")
    budget_data = CSV.parse(File.open(ENV['infile']).read)

    mosfellsbaer = BudgetBallotArea.create!(:budget_amount => 15000.0)
    I18n.locale = "is"
    mosfellsbaer.name = "Growing gaelic"
    mosfellsbaer.save
    I18n.locale = "en"
    mosfellsbaer.name = "Growing gaelic"
    mosfellsbaer.save

    import_gaelic_area_data(mosfellsbaer.id, budget_data, 2)
    config = BudgetConfig.first
    unless config
      config = BudgetConfig.new
    end
    config.timeout_in_seconds = 600
    config.save(:validate=>false)
  end
end
