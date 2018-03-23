# coding: utf-8

require "csv"
#require "ap"
require 'net/http'
require 'net/https'

# docker run --net=host -e "RAILS_ENV=production" -e "infile=/var/import/oav_reykjavik_ballot_data_v_1.csv"  -v /root/open-active-voting:/home/app/oav_website -v /root/import:/var/import yrpri/oav4.6.14 /bin/sh -c "cd /home/app/oav_website;rake reykjavik_ballot:reset_votes_all_ballot_data_from_csv"

@areas =  [
    {:id=>1, :name=> "Lochee" },
    {:id=>2, :name=> "West End" },
    {:id=>3, :name=> "Strathmartine" },
    {:id=>4, :name=> "Coldside" },
    {:id=>5, :name=> "Maryfield" },
    {:id=>6, :name=> "North East"},
    {:id=>7, :name=> "East End" },
    {:id=>8, :name=> "The Ferry" },
]

class Array
  def shuffle
    sort_by { rand }
  end
end

def get_area_name(id)
  areas.each do |area|
    if area.id==id
      return area.name
    end
  end
end

def find_url(id, name,fileType)
  found = nil
  Dir.glob("/home/robert/Documents/Citizens/Dundee2017/*/*").sort.each do |entry|
    if entry.include?(name) and entry.include?(fileType)
      found = entry
    end
  end
  if found
    puts "FOUND: "+found
    found
  else
    raise "Not found"
  end
end

def find_image_url(id, name)
  return find_url(id,name,"jpg")
end

def find_pdf_url(id, name)
  return find_url(id,name,"pdf")
end

def get_number_from_string(entry)
  entry = entry.split("/")[1]
  first_two = entry[0..1].gsub("_","")
  puts first_two
  first_two = first_two.to_i
end

def setup_all_connected_urls
  connected_urls = []
  @areas.each do |area|
    Dir.glob("/home/robert/Documents/Citizens/Dundee2018FINAL/*/*").sort.each do |entry|
      entry = entry.gsub("/home/robert/Documents/Citizens/Dundee2018FINAL/","")
      if entry.include?(area[:name].gsub(" ",""))
        id = get_number_from_string(entry)
        if id
          if entry.end_with?(".jpg") or entry.end_with?(".png")
            connected_urls.append({ :area_id=>area[:id], :id=>id, :name=>area[:name], :image_url=>entry })
          elsif entry.end_with?(".pdf")
            connected_urls.append({ :area_id=>area[:id], :id=>id, :name=>area[:name], :pdf_url=>entry })
          end
        end
      end
    end
  end
  puts connected_urls
end

def find_image_url_for_area_item(area_id, id)
  puts "#{area_id} #{id}"
  @images_and_pdfs.each do |item|
    if item[:area_id]==area_id.to_i and item[:id]==id.to_i and item[:image_url]
      return item[:image_url]
    end
  end
end

def find_pdf_url_for_area_item(area_id, id)
  puts "PDF: #{area_id} - #{id}"
  @images_and_pdfs.each do |item|
    if item[:area_id]==area_id and item[:id]==id and item[:pdf_url] and item[:pdf_url]!=""
      return item[:pdf_url]
    end
  end
end

@images_and_pdfs = [
    {:area_id=>1, :id=>1, :name=>"Lochee", :image_url=>"Lochee/01 Charleston Community Centre.jpg"},
    {:area_id=>1, :id=>1, :name=>"Lochee", :pdf_url=>"Lochee/01 Charleston Community Centre.pdf"},
    {:area_id=>1, :id=>2, :name=>"Lochee", :image_url=>"Lochee/02 Craigowan Road Sheltered Lounge Internal Refurbishment.jpg"},
    {:area_id=>1, :id=>2, :name=>"Lochee", :pdf_url=>"Lochee/02 Craigowan Road Sheltered Lounge Internal Refurbishment.pdf"},
    {:area_id=>1, :id=>3, :name=>"Lochee", :image_url=>"Lochee/03 Craigowan Road Sheltered Lounge Upgrade of car park.jpg"},
    {:area_id=>1, :id=>3, :name=>"Lochee", :pdf_url=>"Lochee/03 Craigowan Road Sheltered Lounge Upgrade of car park.pdf"},
    {:area_id=>1, :id=>4, :name=>"Lochee", :image_url=>"Lochee/04 Alec Craigie Green.jpg"},
    {:area_id=>1, :id=>4, :name=>"Lochee", :pdf_url=>"Lochee/04 Alec Craigie Green.pdf"},
    {:area_id=>1, :id=>5, :name=>"Lochee", :image_url=>"Lochee/05 Pedestrian Crossing on South Road.jpg"},
    {:area_id=>1, :id=>5, :name=>"Lochee", :pdf_url=>"Lochee/05 Pedestrian Crossing on South Road.pdf"},
    {:area_id=>1, :id=>6, :name=>"Lochee", :image_url=>"Lochee/06 Street Lighting.jpg"},
    {:area_id=>1, :id=>6, :name=>"Lochee", :pdf_url=>"Lochee/06 Street Lighting.pdf"},
    {:area_id=>1, :id=>7, :name=>"Lochee", :image_url=>"Lochee/07 Lochee clock and memorial.jpg"},
    {:area_id=>1, :id=>7, :name=>"Lochee", :pdf_url=>"Lochee/07 Lochee clock and memorial.pdf"},
    {:area_id=>1, :id=>8, :name=>"Lochee", :image_url=>"Lochee/08 Dryburgh Play Area.jpg"},
    {:area_id=>1, :id=>8, :name=>"Lochee", :pdf_url=>"Lochee/08 Dryburgh Play Area.pdf"},
    {:area_id=>1, :id=>5, :name=>"Lochee", :image_url=>"WestEnd/05 Improve Lochee Park Play facilities.jpg"},
    {:area_id=>1, :id=>5, :name=>"Lochee", :pdf_url=>"WestEnd/05 Improve play facilities Lochee Park.pdf"},
    {:area_id=>2, :id=>1, :name=>"West End", :image_url=>"WestEnd/01 Blackness Primary School.jpg"},
    {:area_id=>2, :id=>1, :name=>"West End", :pdf_url=>"WestEnd/01 Blackness Primary School.pdf"},
    {:area_id=>2, :id=>2, :name=>"West End", :image_url=>"WestEnd/02 Lighting for Magdalen Green.jpg"},
    {:area_id=>2, :id=>2, :name=>"West End", :pdf_url=>"WestEnd/02 Lighting for Magdalen Green.pdf"},
    {:area_id=>2, :id=>3, :name=>"West End", :image_url=>"WestEnd/03 River Line Walkway.jpg"},
    {:area_id=>2, :id=>3, :name=>"West End", :pdf_url=>"WestEnd/03 River Line Walkway.pdf"},
    {:area_id=>2, :id=>4, :name=>"West End", :pdf_url=>"WestEnd/04 Perth Road District Shopping.pdf"},
    {:area_id=>2, :id=>4, :name=>"West End", :image_url=>"WestEnd/04 Perth Road District Shopping.png"},
    {:area_id=>2, :id=>5, :name=>"West End", :image_url=>"WestEnd/05 Improve Lochee Park Play facilities.jpg"},
    {:area_id=>2, :id=>5, :name=>"West End", :pdf_url=>"WestEnd/05 Improve play facilities Lochee Park.pdf"},
    {:area_id=>2, :id=>6, :name=>"West End", :image_url=>"WestEnd/06 Safe Pedestrian Routes.jpg"},
    {:area_id=>2, :id=>6, :name=>"West End", :pdf_url=>"WestEnd/06 Safe Pedestrian Routes.pdf"},
    {:area_id=>3, :id=>1, :name=>"Strathmartine", :pdf_url=>"Strathmartine/01 Balgowan Play Facilities Refurbishment.pdf"},
    {:area_id=>3, :id=>1, :name=>"Strathmartine", :image_url=>"Strathmartine/01 Balgowan Rd resized.jpg"},
    {:area_id=>3, :id=>2, :name=>"Strathmartine", :image_url=>"Strathmartine/02 Downfield Pavilion resized.jpg"},
    {:area_id=>3, :id=>2, :name=>"Strathmartine", :pdf_url=>"Strathmartine/02 Downfield Pavilion.pdf"},
    {:area_id=>3, :id=>3, :name=>"Strathmartine", :image_url=>"Strathmartine/03 Eskdale Ave resized.jpg"},
    {:area_id=>3, :id=>3, :name=>"Strathmartine", :pdf_url=>"Strathmartine/03 Eskdale Avenue Pavements.pdf"},
    {:area_id=>3, :id=>4, :name=>"Strathmartine", :image_url=>"Strathmartine/04 Improve pavements St Kilda Rd resized.jpg"},
    {:area_id=>3, :id=>4, :name=>"Strathmartine", :pdf_url=>"Strathmartine/04 St Kilda Road Pavements.pdf"},
    {:area_id=>3, :id=>5, :name=>"Strathmartine", :image_url=>"Strathmartine/05 Beauly Ave resized.jpg"},
    {:area_id=>3, :id=>5, :name=>"Strathmartine", :pdf_url=>"Strathmartine/05 Beauly Avenue Pavements.pdf"},
    {:area_id=>3, :id=>6, :name=>"Strathmartine", :pdf_url=>"Strathmartine/06 Haldane Avenue Pavements.pdf"},
    {:area_id=>3, :id=>6, :name=>"Strathmartine", :image_url=>"Strathmartine/06 Haldane Cres resized.jpg"},
    {:area_id=>3, :id=>7, :name=>"Strathmartine", :pdf_url=>"Strathmartine/07 Clatto Visitor Center - Floor Plan.pdf"},
    {:area_id=>3, :id=>7, :name=>"Strathmartine", :image_url=>"Strathmartine/07 Clatto.jpg"},
    {:area_id=>3, :id=>8, :name=>"Strathmartine", :image_url=>"Strathmartine/08 Eurobins resized.jpg"},
    {:area_id=>3, :id=>8, :name=>"Strathmartine", :pdf_url=>"Strathmartine/08 St mary's Eurobins.pdf"},
    {:area_id=>3, :id=>9, :name=>"Strathmartine", :pdf_url=>"Strathmartine/09 Dropped Kerbs.pdf"},
    {:area_id=>3, :id=>9, :name=>"Strathmartine", :image_url=>"Strathmartine/09 St Leonards Plc resized.jpg"},
    {:area_id=>4, :id=>1, :name=>"Coldside", :pdf_url=>"Coldside/01 Dropped Kerbs.pdf"},
    {:area_id=>4, :id=>1, :name=>"Coldside", :image_url=>"Coldside/01 Dropped kerbs resized.jpg"},
    {:area_id=>4, :id=>2, :name=>"Coldside", :image_url=>"Coldside/02 Dudhope Park Lighting.jpg"},
    {:area_id=>4, :id=>2, :name=>"Coldside", :pdf_url=>"Coldside/02 Dudhope Park Lighting.pdf"},
    {:area_id=>4, :id=>3, :name=>"Coldside", :image_url=>"Coldside/03 Alexander Street Play Park.jpg"},
    {:area_id=>4, :id=>3, :name=>"Coldside", :pdf_url=>"Coldside/03 Alexander Street Play Park.pdf"},
    {:area_id=>4, :id=>4, :name=>"Coldside", :image_url=>"Coldside/04 DPM Park.jpg"},
    {:area_id=>4, :id=>4, :name=>"Coldside", :pdf_url=>"Coldside/04 DPM Park.pdf"},
    {:area_id=>4, :id=>5, :name=>"Coldside", :image_url=>"Coldside/05 Pedestrian Crossing on Clepington Road.jpg"},
    {:area_id=>4, :id=>5, :name=>"Coldside", :pdf_url=>"Coldside/05 Pedestrian Crossing on Clepington Road.pdf"},
    {:area_id=>4, :id=>6, :name=>"Coldside", :image_url=>"Coldside/06 Dens Road Play Park.jpg"},
    {:area_id=>4, :id=>6, :name=>"Coldside", :pdf_url=>"Coldside/06 Dens Road Play Park.pdf"},
    {:area_id=>4, :id=>7, :name=>"Coldside", :image_url=>"Coldside/07 Improvements to Coldside Library Small.jpg"},
    {:area_id=>4, :id=>7, :name=>"Coldside", :pdf_url=>"Coldside/07 Improvements to Coldside Library Small.pdf"},
    {:area_id=>4, :id=>8, :name=>"Coldside", :image_url=>"Coldside/08 Improvements to Coldside Library Large.jpg"},
    {:area_id=>4, :id=>8, :name=>"Coldside", :pdf_url=>"Coldside/08 Improvements to Coldside Library Large.pdf"},
    {:area_id=>5, :id=>1, :name=>"Maryfield", :image_url=>"Maryfield/01 Albert Street.jpg"},
    {:area_id=>5, :id=>1, :name=>"Maryfield", :pdf_url=>"Maryfield/01 Albert Street.pdf"},
    {:area_id=>5, :id=>2, :name=>"Maryfield", :image_url=>"Maryfield/02 Baxter Park.jpg"},
    {:area_id=>5, :id=>2, :name=>"Maryfield", :pdf_url=>"Maryfield/02 Baxter Park.pdf"},
    {:area_id=>5, :id=>3, :name=>"Maryfield", :image_url=>"Maryfield/03 Dropped kerbs.jpg"},
    {:area_id=>5, :id=>3, :name=>"Maryfield", :pdf_url=>"Maryfield/03 Dropped kerbs.pdf"},
    {:area_id=>5, :id=>4, :name=>"Maryfield", :image_url=>"Maryfield/04 Baffin Street.jpg"},
    {:area_id=>5, :id=>4, :name=>"Maryfield", :pdf_url=>"Maryfield/04 Baffin Street.pdf"},
    {:area_id=>5, :id=>5, :name=>"Maryfield", :image_url=>"Maryfield/05 Crescent Lane.jpg"},
    {:area_id=>5, :id=>5, :name=>"Maryfield", :pdf_url=>"Maryfield/05 Crescent Lane.pdf"},
    {:area_id=>5, :id=>6, :name=>"Maryfield", :image_url=>"Maryfield/06 South Baffin Street Stairs.jpg"},
    {:area_id=>5, :id=>6, :name=>"Maryfield", :pdf_url=>"Maryfield/06 South Baffin Street Stairs.pdf"},
    {:area_id=>6, :id=>1, :name=>"North East", :image_url=>"NorthEast/01 Refurbish the Multi Use Games Area Cheviot Crescent.jpg"},
    {:area_id=>6, :id=>1, :name=>"North East", :pdf_url=>"NorthEast/01 Refurbish the Multi Use Games Area Cheviot Crescnt.pdf"},
    {:area_id=>6, :id=>2, :name=>"North East", :image_url=>"NorthEast/02 Plant new trees and shrubs in Mill O Mains Park and Middleton Wood.jpg"},
    {:area_id=>6, :id=>2, :name=>"North East", :pdf_url=>"NorthEast/02 Plant new trees and shrubs in Mill O Mains Park and Middleton Wood.pdf"},
    {:area_id=>6, :id=>3, :name=>"North East", :image_url=>"NorthEast/03 Improving skatingbmx area at Whitfield Green.jpg"},
    {:area_id=>6, :id=>3, :name=>"North East", :pdf_url=>"NorthEast/03 Improving skatingbmx area at Whitfield Green.pdf"},
    {:area_id=>6, :id=>4, :name=>"North East", :image_url=>"NorthEast/04 Outdoor exercise equipment at Fintry Park and the Dighty.jpg"},
    {:area_id=>6, :id=>4, :name=>"North East", :pdf_url=>"NorthEast/04 Outdoor exercise equipment at Fintry Park and the Dighty.pdf"},
    {:area_id=>6, :id=>5, :name=>"North East", :image_url=>"NorthEast/05 Improve pavement area Fintry Road.jpg"},
    {:area_id=>6, :id=>5, :name=>"North East", :pdf_url=>"NorthEast/05 Improve pavement area Fintry Road.pdf"},
    {:area_id=>6, :id=>6, :name=>"North East", :pdf_url=>"NorthEast/06 Reduce Traffic Congestion around Fintry Primary School.pdf"},
    {:area_id=>6, :id=>6, :name=>"North East", :image_url=>"NorthEast/06 Reduced Traffic Congestion around Fintry Primary School.jpg"},
    {:area_id=>6, :id=>7, :name=>"North East", :image_url=>"NorthEast/07 Dighty and Whitfield burn clean up.jpg"},
    {:area_id=>6, :id=>7, :name=>"North East", :pdf_url=>"NorthEast/07 Dighty and Whitfield burn clean up.pdf"},
    {:area_id=>6, :id=>8, :name=>"North East", :image_url=>"NorthEast/08 Refurbish the car park at Middleton Wood.jpg"},
    {:area_id=>6, :id=>8, :name=>"North East", :pdf_url=>"NorthEast/08 Refurbish the car park at Middleton Wood.pdf"},
    {:area_id=>6, :id=>9, :name=>"North East", :image_url=>"NorthEast/09 Two way entrance and extended car park at Drumgeith Park.jpg"},
    {:area_id=>6, :id=>9, :name=>"North East", :pdf_url=>"NorthEast/09 Two way entrance and extended car park at Drumgeith Park.pdf"},
    {:area_id=>6, :id=>10, :name=>"North East", :image_url=>"NorthEast/10 Fencing around Murrayfield Allotments.jpg"},
    {:area_id=>6, :id=>10, :name=>"North East", :pdf_url=>"NorthEast/10 Fencing around Murrayfield Allotments.pdf"},
    {:area_id=>6, :id=>11, :name=>"North East", :image_url=>"NorthEast/11 Middleton Woods Pathways.jpg"},
    {:area_id=>6, :id=>11, :name=>"North East", :pdf_url=>"NorthEast/11 Middleton Woods Pathways.pdf"},
    {:area_id=>7, :id=>1, :name=>"East End", :image_url=>"EastEnd/01 Improve play areas Finlathen Park.jpg"},
    {:area_id=>7, :id=>1, :name=>"East End", :pdf_url=>"EastEnd/01 Improve play areas Finlathen Park.pdf"},
    {:area_id=>7, :id=>2, :name=>"East End", :image_url=>"EastEnd/02 Create pedestrian crossing Arbroath Road.jpg"},
    {:area_id=>7, :id=>2, :name=>"East End", :pdf_url=>"EastEnd/02 Create pedestrian crossing Arbroath Road.pdf"},
    {:area_id=>7, :id=>3, :name=>"East End", :image_url=>"EastEnd/03 Improve area Balerno Bowling Green.jpg"},
    {:area_id=>7, :id=>3, :name=>"East End", :pdf_url=>"EastEnd/03 Improve area Balerno Bowling Green.pdf"},
    {:area_id=>7, :id=>4, :name=>"East End", :image_url=>"EastEnd/04 Improve cycle paths at Claypotts, dighty and green circular.jpg"},
    {:area_id=>7, :id=>4, :name=>"East End", :pdf_url=>"EastEnd/04 Improve cycle paths at Claypotts, dighty and green circular.pdf"},
    {:area_id=>7, :id=>5, :name=>"East End", :image_url=>"EastEnd/05 Create play area at St Vincents.jpg"},
    {:area_id=>7, :id=>5, :name=>"East End", :pdf_url=>"EastEnd/05 Create play area at St Vincents.pdf"},
    {:area_id=>8, :id=>1, :name=>"The Ferry", :image_url=>"TheFerry/01 Dropped kerbs Forthill area.jpg"},
    {:area_id=>8, :id=>1, :name=>"The Ferry", :pdf_url=>"TheFerry/01 Dropped kerbs Forthill area.pdf"},
    {:area_id=>8, :id=>2, :name=>"The Ferry", :image_url=>"TheFerry/02 Improve facilities in local play parks for children with disabilities.jpg"},
    {:area_id=>8, :id=>2, :name=>"The Ferry", :pdf_url=>"TheFerry/02 Improve facilities in local playparks for children with disabilities.pdf"},
    {:area_id=>8, :id=>3, :name=>"The Ferry", :image_url=>"TheFerry/03 Upgrade surface of Rugby Terr tennis courts.jpg"},
    {:area_id=>8, :id=>3, :name=>"The Ferry", :pdf_url=>"TheFerry/03 Upgrade surface of Rugby Terr tennis courts.pdf"},
    {:area_id=>8, :id=>4, :name=>"The Ferry", :image_url=>"TheFerry/04 Gillies park provide lighting to paths.jpg"},
    {:area_id=>8, :id=>4, :name=>"The Ferry", :pdf_url=>"TheFerry/04 Gillies park provide lighting to paths.pdf"},
    {:area_id=>8, :id=>5, :name=>"The Ferry", :image_url=>"TheFerry/05 Gillies Park replace existing play equipment.jpg"},
    {:area_id=>8, :id=>5, :name=>"The Ferry", :pdf_url=>"TheFerry/05 Gillies Park replace existing play equipment.pdf"},
    {:area_id=>8, :id=>6, :name=>"The Ferry", :image_url=>"TheFerry/06 Castle Green Kiddie Cars and Golf.jpg"},
    {:area_id=>8, :id=>6, :name=>"The Ferry", :pdf_url=>"TheFerry/06 Castle Green Kiddie Cars and Golf.pdf"},
    {:area_id=>8, :id=>7, :name=>"The Ferry", :pdf_url=>"TheFerry/07 Dawson Park Refurbishment of changing facilities.pdf"},
    {:area_id=>8, :id=>7, :name=>"The Ferry", :image_url=>"TheFerry/07 Dawson Park refurbishment of changing facilities.jpg"},
    {:area_id=>8, :id=>8, :name=>"The Ferry", :image_url=>"TheFerry/08 Orchar park, dawson park and grassy beach.jpg"},
    {:area_id=>8, :id=>8, :name=>"The Ferry", :pdf_url=>"TheFerry/08 Orchar park, dawson park and grassy beach.pdf"},
    {:area_id=>8, :id=>9, :name=>"The Ferry", :image_url=>"TheFerry/09 Reres park and grassy beach.jpg"},
    {:area_id=>8, :id=>9, :name=>"The Ferry", :pdf_url=>"TheFerry/09 Reres park and grassy beach.pdf"}
]

namespace :ab_2018_ballot do
  desc "rename_connected_file_names"
  task(:rename_connected_file_names => :environment) do
    Dir.glob("/home/robert/Documents/Citizens/Dundee2017/*/*").sort.each do |entry|
      if File.basename(entry, File.extname(entry)).include?(" ")
        newEntry = entry.gsub(" ", "_")
        File.rename( entry, newEntry )
        puts "Rename from " + entry + " to " + newEntry
      end
    end
  end

  desc "rename_connected_file_names"
  task(:find_urls => :environment) do
    setup_all_connected_urls
  end

  def create_budget_ballot_item_dundee(area_id, budget_data, row_number)
    #puts budget_data[row_number]
    name_en = budget_data[row_number][1]
    puts "name_en #{name_en} #{row_number}"
    price = budget_data[row_number][5]
    price = price.gsub("£","")
    price = price.gsub(",","")
    puts "Price is: #{price}"
    locations = budget_data[row_number][7]
    puts locations

    if budget_data[row_number][8] and budget_data[row_number][8]!=""
      puts budget_data[row_number][8]
      locations = "#{locations},#{budget_data[row_number][8]}"
    end

    description_en = budget_data[row_number][3]
    puts description_en

    idea_url =  budget_data[row_number][6]
    puts idea_url

    if idea_url
      idea_id = idea_url.split('/').last
      post_url = "https://www.betraisland.is/api/posts/"+idea_id
      encoded_url = URI.encode(post_url)
      uri = URI(encoded_url)
      proxy_addr = nil
      proxy_port = nil
      res = nil

      ri = URI.parse(post_url)
      http = Net::HTTP.new(uri.host, uri.port, proxy_addr, proxy_port)
      http.use_ssl = true
      res = http.get(uri.request_uri)
      puts res.inspect
      puts res.body

      post_json = JSON.parse(res.body)
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
                                      :pdf_url=>nil,
                                      :idea_url=>"no")

      I18n.locale = "en"
      item.name = name_en
      item.description = description_en
      item.save
      puts "========================================================="

  end

  def import_area_data_dundee(area_id, budget_data, start_row_number, total_number_of_rows=20)
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      create_budget_ballot_item_dundee(area_id, budget_data, current_row_number)
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

      area = BudgetBallotArea.create!(:budget_amount => 28893.0)
      I18n.locale = "en"
      area.name = "Oban, Lorn and the Isles"
      I18n.locale = "is"
      area.name = "Oban, Lorn and the Isles"
      area.save
      import_area_data_dundee(area.id, budget_data, 2, 23)

      area = BudgetBallotArea.create!(:budget_amount => 27236.0)
      I18n.locale = "en"
      area.name = "Bute and Cowal"
      I18n.locale = "is"
      area.name = "Bute and Cowal"
      area.save
      import_area_data_dundee(area.id, budget_data, 25, 27)

      area = BudgetBallotArea.create!(:budget_amount => 28072.0)
      I18n.locale = "en"
      area.name = "Helensburgh & Lomond"
      I18n.locale = "is"
      area.name = "Helensburgh & Lomond"
      area.save
      import_area_data_dundee(area.id, budget_data, 52, 22)

      area = BudgetBallotArea.create!(:budget_amount => 25660.0)
      I18n.locale = "en"
      area.name = "Mid Argyll, Kintyre and the Islands"
      I18n.locale = "is"
      area.name = "Mid Argyll, Kintyre and the Islands"
      area.save
      import_area_data_dundee(area.id, budget_data, 73, 24)
    else
      puts "BALLOT BOX IS NOT EMPTY, NO ACTION TAKEN!"
    end
  end
end