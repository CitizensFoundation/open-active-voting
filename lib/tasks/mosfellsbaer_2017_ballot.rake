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

namespace :mosfellsbaer_2017_ballot do

  def create_budget_moso_ballot_item(area_id, budget_data, row_number)
    idea_id = budget_data[row_number][0]
    puts "HELLO"
    puts idea_id
    puts budget_data[row_number]
    name_is = budget_data[row_number][3]
    puts name_is
    price = budget_data[row_number][4]
    price = price.gsub(',','')
    price = price.gsub(' kr.','')
    price = price.to_f / 1000000.0
    puts price
    locations = budget_data[row_number][5]
    puts locations

    if budget_data[row_number][6]
      puts budget_data[row_number][6]
      locations = "#{locations},#{budget_data[row_number][6]}"
    end

    description_is = budget_data[row_number][7]
    puts description_is

    name_en = budget_data[row_number][9]
    puts name_en

    description_en =  budget_data[row_number][10]
    idea_url =  budget_data[row_number][11]
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
                                    :locations=>locations,
                                    :image_url=>image_url,
                                    :idea_url=>idea_url)

    puts "ITEM ------------"
    puts item.to_s
    puts "================="

    I18n.locale = "is"
    item.name = name_is
    item.description = description_is
    item.save
    I18n.locale = "en"
    item.name = name_en
    item.description = description_en
    item.save
    puts "========================================================="
  end

  def import_moso_area_data(area_id, budget_data, start_row_number, total_number_of_rows=25)
    puts "import_area_data"
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      create_budget_moso_ballot_item(area_id, budget_data, current_row_number)
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

    puts "MOSO"
    Vote.delete_all
    FinalSplitVote.delete_all
    BudgetBallotItem.delete_all
    ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_items")
    BudgetBallotArea.delete_all
    ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_areas")
    budget_data = CSV.parse(File.open(ENV['infile']).read)

    mosfellsbaer = BudgetBallotArea.create!(:budget_amount => 25.0)
    I18n.locale = "is"
    mosfellsbaer.name = "Mosfellsbær"
    mosfellsbaer.save
    I18n.locale = "en"
    mosfellsbaer.name = "Mosfellsbær"
    mosfellsbaer.save

    import_moso_area_data(mosfellsbaer.id, budget_data, 2)
    config = BudgetConfig.first
    unless config
      config = BudgetConfig.new
    end
    config.rsk_url = "https://audkenning.vottun.is/Login/Login?electionId=fe7d5f61-84b1-47cb-b057-ec0f3f12b6d0&returnUrl=%20https%3A%2F%2Fkosning.mos.is%2Fauthenticate_from_island_is"
    config.timeout_in_seconds = 600
    config.saml_idp_cert_fingerprint = "54:54:6C:A2:93:D0:AF:BF:11:5D:7C:8B:DC:4C:72:12:C8:99:80:95"
    config.save(:validate=>false)
  end
end
