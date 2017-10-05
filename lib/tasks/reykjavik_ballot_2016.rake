# coding: utf-8

require "csv"
#require "ap"
require 'net/http'
require 'net/https'

# docker run --net=host -e "RAILS_ENV=production" -e "infile=/var/import/oav_reykjavik_ballot_data_v_1.csv"  -v /root/open-active-voting:/home/app/oav_website -v /root/import:/var/import yrpri/oav4.6.14 /bin/sh -c "cd /home/app/oav_website;rake reykjavik_ballot:reset_votes_all_ballot_data_from_csv"

class Array
  def shuffle
    sort_by { rand }
  end
end

namespace :reykjavik_ballot_2016 do

  def create_budget_ballot_item_2016(area_id, budget_data, row_number)
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

    if idea_url
      idea_id = idea_url.split('/').last
      post_url = "https://www.betraisland.is/api/posts/"+idea_id
      encoded_url = URI.encode(post_url)
      uri = URI(encoded_url)
      res = Net::HTTP.get(uri)
      #puts res
      #res = Net::HTTP.get URI(post_url)
      post_json = JSON.parse(res)
      if post_json["PostHeaderImages"] and post_json["PostHeaderImages"].length>0
        #puts post_json["PostHeaderImages"][0]
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

    I18n.locale = "is"
    item.name = name_is
    item.description = description_is
    item.save
    I18n.locale = "en"
    item.name = name_en
    item.description = description_en
    item.save
    puts "1========================================================="
  end

  def import_area_data_2016(area_id, budget_data, start_row_number, total_number_of_rows=20)
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      create_budget_ballot_item(area_id, budget_data, current_row_number)
      current_row_number +=1
    end
  end

  desc "Reset All Ballot Data from CSV"
  task(:reset_votes_all_ballot_data_from_csv_2016 => :environment) do

    if Vote.count == 0
      BudgetBallotItem.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_items")
      BudgetBallotArea.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_areas")
      budget_data = CSV.parse(File.open(ENV['infile']).read)

      vesturbaer = BudgetBallotArea.create!(:budget_amount => 56.0)
      I18n.locale = "is"
      vesturbaer.name = "Vesturbær"
      vesturbaer.save
      I18n.locale = "en"
      vesturbaer.name = "Vesturbær"
      vesturbaer.save

      import_area_data(vesturbaer.id, budget_data, 11)

      midborg = BudgetBallotArea.create!(:budget_amount => 34.0)
      I18n.locale = "is"
      midborg.name = "Miðborg"
      midborg.save
      I18n.locale = "en"
      midborg.name = "Miðborg"
      midborg.save
      import_area_data(midborg.id, budget_data, 35, 13)

      hlidar = BudgetBallotArea.create!(:budget_amount => 39.0)
      I18n.locale = "is"
      hlidar.name = "Hlíðar"
      hlidar.save
      I18n.locale = "en"
      hlidar.name = "Hlíðar"
      hlidar.save
      import_area_data(hlidar.id, budget_data, 54)

      haaleiti = BudgetBallotArea.create!(:budget_amount => 51.0)
      I18n.locale = "is"
      haaleiti.name = "Háaleiti og Bústaðir"
      haaleiti.save
      I18n.locale = "en"
      haaleiti.name = "Háaleiti og Bústaðir"
      haaleiti.save
      import_area_data(haaleiti.id, budget_data, 104)

      laugardalur = BudgetBallotArea.create!(:budget_amount => 55.0)
      I18n.locale = "is"
      laugardalur.name = "Laugardalur"
      laugardalur.save
      I18n.locale = "en"
      laugardalur.name = "Laugardalur"
      laugardalur.save
      import_area_data(laugardalur.id, budget_data, 79)

      breidholt = BudgetBallotArea.create!(:budget_amount => 70.0)
      I18n.locale = "is"
      breidholt.name = "Breiðholt"
      breidholt.save
      I18n.locale = "en"
      breidholt.name = "Breiðholt"
      breidholt.save

      import_area_data(breidholt.id, budget_data, 129)

      arbaer = BudgetBallotArea.create!(:budget_amount => 47.0)
      I18n.locale = "is"
      arbaer.name = "Árbær"
      arbaer.save
      I18n.locale = "en"
      arbaer.name = "Árbær"
      arbaer.save
      import_area_data(arbaer.id, budget_data, 154)

      grafarvogur = BudgetBallotArea.create!(:budget_amount => 61.0)
      I18n.locale = "is"
      grafarvogur.name = "Grafarvogur"
      grafarvogur.save
      I18n.locale = "en"
      grafarvogur.name = "Grafarvogur"
      grafarvogur.save
      import_area_data(grafarvogur.id, budget_data, 179)

      grafarholt = BudgetBallotArea.create!(:budget_amount => 29.0)
      I18n.locale = "is"
      grafarholt.name = "Grafarholt og Úlfarsárdalur"
      grafarholt.save
      I18n.locale = "en"
      grafarholt.name = "Grafarholt og Úlfarsárdalur"
      grafarholt.save
      import_area_data(grafarholt.id, budget_data, 205, 17)

      kjalarnes = BudgetBallotArea.create!(:budget_amount => 14.0)
      I18n.locale = "is"
      kjalarnes.name = "Kjalarnes"
      kjalarnes.save
      I18n.locale = "en"
      kjalarnes.name = "Kjalarnes"
      kjalarnes.save
      import_area_data(kjalarnes.id, budget_data, 227, 19)
    else
      puts "BALLOT BOX IS NOT EMPTY, NO ACTION TAKEN!"
    end
  end
end