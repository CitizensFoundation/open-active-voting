# coding: utf-8

require "csv"
#require "ap"
require 'net/http'
require 'net/https'

# docker run --net=host -e "RAILS_ENV=production" -e "infile=/var/import/oav_mosfellsbaer_2017_ballot_data_v_1.csv"  -v /root/open-active-voting:/home/app/oav_website -v /root/import:/var/import yrpri/oav4.6.14 /bin/sh -c "cd /home/app/oav_website;rake mosfellsbaer_2017_ballot:reset_votes_all_ballot_data_from_csv"

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
    locations = budget_data[row_number][8]
    puts locations

    if budget_data[row_number][9]
      puts budget_data[row_number][9]
      locations = "#{locations},#{budget_data[row_number][9]}"
    end

    description_is = budget_data[row_number][10]
    puts description_is

    name_en = budget_data[row_number][15]
    puts name_en

    description_en =  budget_data[row_number][16]
    idea_url =  budget_data[row_number][17]
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
  end
end