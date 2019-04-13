# coding: UTF-8

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

namespace :reykjavik_ballot do

  def create_budget_ballot_item(area_id, budget_data, row_number)
    puts row_number
    #puts budget_data[row_number]
    name_is = budget_data[row_number][5]
    puts "name_is #{name_is} #{row_number}"
    price = budget_data[row_number][7]
    puts price
    price = price.gsub(',','')
    price = price.gsub('.','')
    price = price.gsub(' kr.','')
    price = price.to_f / 1000000.0
    puts "Price: #{price}"
    locations = budget_data[row_number][8].gsub(" ","")
    puts locations

    if budget_data[row_number][9] and budget_data[row_number][9]!=""
      puts budget_data[row_number][9]
      locations = "#{locations},#{budget_data[row_number][9]}"
    end

    description_is = budget_data[row_number][6]
    puts description_is

    name_en = budget_data[row_number][10]
    puts name_en

    description_en =  budget_data[row_number][11]
    idea_url =  budget_data[row_number][14]
    puts "idea_url: #{idea_url}"

    if idea_url
      idea_id = idea_url.split('/').last
      post_url = "https://www.betrireykjavik.is/api/posts/"+idea_id
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
#    I18n.locale = "pl"
#    item.name = budget_data[row_number][12]
#    item.description = budget_data[row_number][13]
#    item.save
    puts "========================================================="
  end

  def import_area_data(area_id, budget_data, start_row_number, total_number_of_rows=25)
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      create_budget_ballot_item(area_id, budget_data, current_row_number)
      current_row_number +=1
    end
  end

  desc "Reset All Ballot Data from CSV"
  task(:reset_votes_all_ballot_data_from_csv => :environment) do

    if Vote.count == 0
      BudgetBallotItem.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_items")
      BudgetBallotArea.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_areas")
      budget_data = CSV.parse(File.open(ENV['infile']).read)

      arbaer = BudgetBallotArea.create!(:budget_amount => 41.0)
      I18n.locale = "is"
      arbaer.name = "Árbær"
      arbaer.save
      I18n.locale = "en"
      arbaer.name = "Árbær"
      arbaer.save
      I18n.locale = "pl"
      arbaer.name = "Árbær"
      arbaer.save
      import_area_data(arbaer.id, budget_data, 2,23)

      breidholt = BudgetBallotArea.create!(:budget_amount => 70.0)
      I18n.locale = "is"
      breidholt.name = "Breiðholt"
      breidholt.save
      I18n.locale = "en"
      breidholt.name = "Breiðholt"
      breidholt.save
      I18n.locale = "pl"
      breidholt.name = "Breiðholt"
      breidholt.save
      import_area_data(breidholt.id, budget_data, 26, 25)

      grafarholt = BudgetBallotArea.create!(:budget_amount => 31.0)
      I18n.locale = "is"
      grafarholt.name = "Grafarholt og Úlfarsárdalur"
      grafarholt.save
      I18n.locale = "en"
      grafarholt.name = "Grafarholt og Úlfarsárdalur"
      grafarholt.save
      I18n.locale = "pl"
      grafarholt.name = "Grafarholt og Úlfarsárdalur"
      grafarholt.save
      import_area_data(grafarholt.id, budget_data, 52, 24)

      grafarvogur = BudgetBallotArea.create!(:budget_amount => 60.0)
      I18n.locale = "is"
      grafarvogur.name = "Grafarvogur"
      grafarvogur.save
      I18n.locale = "en"
      grafarvogur.name = "Grafarvogur"
      grafarvogur.save
      I18n.locale = "pl"
      grafarvogur.name = "Grafarvogur"
      grafarvogur.save
      import_area_data(grafarvogur.id, budget_data, 77, 25)

      haaleiti = BudgetBallotArea.create!(:budget_amount => 51.0)
      I18n.locale = "is"
      haaleiti.name = "Háaleiti og Bústaðir"
      haaleiti.save
      I18n.locale = "en"
      haaleiti.name = "Háaleiti og Bústaðir"
      haaleiti.save
      I18n.locale = "pl"
      haaleiti.name = "Háaleiti og Bústaðir"
      haaleiti.save
      import_area_data(haaleiti.id, budget_data, 103, 24)

      hlidar = BudgetBallotArea.create!(:budget_amount => 40.0)
      I18n.locale = "is"
      hlidar.name = "Hlíðar"
      hlidar.save
      I18n.locale = "en"
      hlidar.name = "Hlíðar"
      hlidar.save
      I18n.locale = "pl"
      hlidar.name = "Hlíðar"
      hlidar.save
      import_area_data(hlidar.id, budget_data, 128, 24)

      kjalarnes = BudgetBallotArea.create!(:budget_amount => 14.0)
      I18n.locale = "is"
      kjalarnes.name = "Kjalarnes"
      kjalarnes.save
      I18n.locale = "en"
      kjalarnes.name = "Kjalarnes"
      kjalarnes.save
      I18n.locale = "pl"
      kjalarnes.name = "Kjalarnes"
      kjalarnes.save
      import_area_data(kjalarnes.id, budget_data, 153, 19)

      laugardalur = BudgetBallotArea.create!(:budget_amount => 55.0)
      I18n.locale = "is"
      laugardalur.name = "Laugardalur"
      laugardalur.save
      I18n.locale = "en"
      laugardalur.name = "Laugardalur"
      laugardalur.save
      I18n.locale = "pl"
      laugardalur.name = "Laugardalur"
      laugardalur.save
      import_area_data(laugardalur.id, budget_data, 173, 25)

      midborg = BudgetBallotArea.create!(:budget_amount => 33.0)
      I18n.locale = "is"
      midborg.name = "Miðborg"
      midborg.save
      I18n.locale = "en"
      midborg.name = "Miðborg"
      midborg.save
      I18n.locale = "pl"
      midborg.name = "Miðborg"
      midborg.save
      import_area_data(midborg.id, budget_data, 199, 25)

      vesturbaer = BudgetBallotArea.create!(:budget_amount => 55.0)
      I18n.locale = "is"
      vesturbaer.name = "Vesturbær"
      vesturbaer.save
      I18n.locale = "en"
      vesturbaer.name = "Vesturbær"
      vesturbaer.save
      I18n.locale = "pl"
      vesturbaer.name = "Vesturbær"
      vesturbaer.save
      import_area_data(vesturbaer.id, budget_data, 225, 25)
    else
      puts "BALLOT BOX IS NOT EMPTY, NO ACTION TAKEN!"
    end
  end
end