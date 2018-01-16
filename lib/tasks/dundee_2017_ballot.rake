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
    Dir.glob("/home/robert/Documents/Citizens/Dundee2017/*/*").sort.each do |entry|
      entry = entry.gsub("/home/robert/Documents/Citizens/Dundee2017/","")
      if entry.include?(area[:name].gsub(" ",""))
        id = get_number_from_string(entry)
        if id
          if entry.end_with?(".jpg")
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
  {:area_id=>1, :id=>2, :name=>"Lochee", :pdf_url=>"Lochee/02 CRAIGOWAN ROAD SHELTERED LOUNGE Internal Refurbishment.pdf"},
  {:area_id=>1, :id=>2, :name=>"Lochee", :image_url=>"Lochee/02 Craigowan Road Sheltered Lounge Internal Refurbishment.jpg"},
  {:area_id=>1, :id=>3, :name=>"Lochee", :image_url=>"Lochee/03 Craigowan Road Sheltered Lounge Upgrade of car park.jpg"},
  {:area_id=>1, :id=>3, :name=>"Lochee", :pdf_url=>"Lochee/03 Craigowan Sheltered Lounge - Upgrade of car park.pdf"},
  {:area_id=>1, :id=>4, :name=>"Lochee", :image_url=>"Lochee/04 The Green Alec Craigie.jpg"},
  {:area_id=>1, :id=>4, :name=>"Lochee", :pdf_url=>"Lochee/04 The Green Alec Craigie.pdf"},
  {:area_id=>1, :id=>5, :name=>"Lochee", :image_url=>"Lochee/05 LIDL South Road.jpg"},
  {:area_id=>1, :id=>5, :name=>"Lochee", :pdf_url=>"Lochee/05 LIDL South Road.pdf"},
  {:area_id=>1, :id=>6, :name=>"Lochee", :image_url=>"Lochee/06 South Road Play Park and Menzieshill Play Trail.jpg"},
  {:area_id=>1, :id=>6, :name=>"Lochee", :pdf_url=>"Lochee/06 South Road Play Park and Menzieshill Play Trail.pdf"},
  {:area_id=>1, :id=>7, :name=>"Lochee", :pdf_url=>"Lochee/07 Lochee Clock.pdf"},
  {:area_id=>1, :id=>7, :name=>"Lochee", :image_url=>"Lochee/07 Lochee clock.jpg"},
  {:area_id=>1, :id=>8, :name=>"Lochee", :image_url=>"Lochee/08 New play park at Dryburgh Resource Centre.jpg"},
  {:area_id=>1, :id=>8, :name=>"Lochee", :pdf_url=>"Lochee/08 New play park at Dryburgh Resource Centre.pdf"},
  {:area_id=>2, :id=>1, :name=>"West End", :pdf_url=>"WestEnd/01 Improve play facilities Lochee Park.pdf"},
  {:area_id=>2, :id=>2, :name=>"West End", :image_url=>"WestEnd/02 West end site of Blackness Primary.jpg"},
  {:area_id=>2, :id=>2, :name=>"West End", :pdf_url=>"WestEnd/02 West end site of Blackness Primary.pdf"},
  {:area_id=>2, :id=>3, :name=>"West End", :pdf_url=>"WestEnd/03 West End Drop Kerb Imrpovements.pdf"},
  {:area_id=>2, :id=>3, :name=>"West End", :image_url=>"WestEnd/03 West End Dropped Kerb Improvements.jpg"},
  {:area_id=>2, :id=>4, :name=>"West End", :image_url=>"WestEnd/04 Linear route along north of railway line (2).jpg"},
  {:area_id=>2, :id=>4, :name=>"West End", :pdf_url=>"WestEnd/04 Linear route along north of railway line.pdf"},
  {:area_id=>2, :id=>5, :name=>"West End", :image_url=>"WestEnd/05 Magdalen Green Street Lighting.jpg"},
  {:area_id=>2, :id=>5, :name=>"West End", :pdf_url=>"WestEnd/05 Magdalen Green Street Lighting.pdf"},
  {:area_id=>3, :id=>1, :name=>"Strathmartine", :pdf_url=>"Strathmartine/01_Balgowan_Play_Facilities_Refurbishment.pdf"},
  {:area_id=>3, :id=>1, :name=>"Strathmartine", :image_url=>"Strathmartine/01_Balgowan_Rd_resized.jpg"},
  {:area_id=>3, :id=>2, :name=>"Strathmartine", :pdf_url=>"Strathmartine/02_Downfield_Pavilion.pdf"},
  {:area_id=>3, :id=>2, :name=>"Strathmartine", :image_url=>"Strathmartine/02_Downfield_Pavilion_resized.jpg"},
  {:area_id=>3, :id=>3, :name=>"Strathmartine", :image_url=>"Strathmartine/03_Eskdale_Ave_resized.jpg"},
  {:area_id=>3, :id=>3, :name=>"Strathmartine", :pdf_url=>"Strathmartine/03_Scope_of_Works_-_Eskdale_Avenue.pdf"},
  {:area_id=>3, :id=>4, :name=>"Strathmartine", :image_url=>"Strathmartine/04_Improve_pavements_St_Kilda_Rd_resized.jpg"},
  {:area_id=>3, :id=>4, :name=>"Strathmartine", :pdf_url=>"Strathmartine/04_Scope_of__Works_-_St_Kilda_Road.pdf"},
  {:area_id=>3, :id=>5, :name=>"Strathmartine", :image_url=>"Strathmartine/05_Beauly_Ave_resized.jpg"},
  {:area_id=>3, :id=>5, :name=>"Strathmartine", :pdf_url=>"Strathmartine/05_Scope_of_Works_-_Beauly_Avenue.pdf"},
  {:area_id=>3, :id=>6, :name=>"Strathmartine", :image_url=>"Strathmartine/06_Haldane_Cres_resized.jpg"},
  {:area_id=>3, :id=>6, :name=>"Strathmartine", :pdf_url=>"Strathmartine/06_Scope_of_Works_-_Haldane_Terrace.pdf"},
  {:area_id=>3, :id=>7, :name=>"Strathmartine", :image_url=>"Strathmartine/07_Clatto.jpg"},
  {:area_id=>3, :id=>7, :name=>"Strathmartine", :pdf_url=>"Strathmartine/07_Clatto_Visitor_Center_-_Floor_Plan.pdf"},
  {:area_id=>3, :id=>8, :name=>"Strathmartine", :pdf_url=>"Strathmartine/08_Euro_Bins_General_Arrangement.pdf"},
  {:area_id=>3, :id=>8, :name=>"Strathmartine", :image_url=>"Strathmartine/08_Eurobins_resized.jpg"},
  {:area_id=>3, :id=>9, :name=>"Strathmartine", :image_url=>"Strathmartine/09_St_Leonards_Plc_resized.jpg"},
  {:area_id=>3, :id=>9, :name=>"Strathmartine", :pdf_url=>"Strathmartine/09_Strathmartine_Dropped_Kerbs.pdf"},
  {:area_id=>3, :id=>0, :name=>"Strathmartine", :pdf_url=>"Strathmartine/Community_Infrastructure_Participatory_Budget_-_List_of_Projects_Strathmartine.pdf"},
  {:area_id=>4, :id=>1, :name=>"Coldside", :pdf_url=>"Coldside/01_Dudhope_Park,_Tennis_Pavilion.pdf"},
  {:area_id=>4, :id=>1, :name=>"Coldside", :image_url=>"Coldside/01_Dudhope_Park_Tennis_Pavilion_resized.jpg"},
  {:area_id=>4, :id=>2, :name=>"Coldside", :pdf_url=>"Coldside/02_COLDSIDE_Drop_Kerbs.pdf"},
  {:area_id=>4, :id=>2, :name=>"Coldside", :image_url=>"Coldside/02_Dropped_kerbs_resized.jpg"},
  {:area_id=>4, :id=>3, :name=>"Coldside", :image_url=>"Coldside/03_Dudhope_Lighting_resized.jpg"},
  {:area_id=>4, :id=>3, :name=>"Coldside", :pdf_url=>"Coldside/03_Dudhope_Park_Lighting_General_Arrangement.pdf"},
  {:area_id=>4, :id=>4, :name=>"Coldside", :pdf_url=>"Coldside/04_Alexander_Street_Play_Park_Location_Plan.pdf"},
  {:area_id=>4, :id=>4, :name=>"Coldside", :image_url=>"Coldside/04_Play_park_example_for_Alexander_St_resized.jpg"},
  {:area_id=>4, :id=>5, :name=>"Coldside", :image_url=>"Coldside/05_DPM_Park_resized.jpg"},
  {:area_id=>4, :id=>5, :name=>"Coldside", :pdf_url=>"Coldside/05_Site_Location_DPM_Park.pdf"},
  {:area_id=>4, :id=>6, :name=>"Coldside", :pdf_url=>"Coldside/06_General_Arrangement_PED_Crossing_on_Clep_Road.pdf"},
  {:area_id=>4, :id=>6, :name=>"Coldside", :image_url=>"Coldside/06_Pedestrian_Crossing_Clepington_Rd_resized.jpg"},
  {:area_id=>4, :id=>7, :name=>"Coldside", :image_url=>"Coldside/07_Play_park_steps_resized.jpg"},
  {:area_id=>4, :id=>7, :name=>"Coldside", :pdf_url=>"Coldside/07_Site_Location_Plan_Dens_Road_Play_Area.pdf"},
  {:area_id=>4, :id=>8, :name=>"Coldside", :pdf_url=>"Coldside/08_Coldside_small_phase.pdf"},
  {:area_id=>4, :id=>8, :name=>"Coldside", :image_url=>"Coldside/08_Coldside_small_phase_resized.jpg"},
  {:area_id=>4, :id=>9, :name=>"Coldside", :pdf_url=>"Coldside/09_Coldside_large_phase.pdf"},
  {:area_id=>4, :id=>9, :name=>"Coldside", :image_url=>"Coldside/09_Coldside_large_phase_resized.jpg"},
  {:area_id=>4, :id=>0, :name=>"Coldside", :pdf_url=>"Coldside/Community_Infrastructure_Participatory_Budget_-_List_of_Projects_Coldside.pdf"},
  {:area_id=>5, :id=>1, :name=>"Maryfield", :pdf_url=>"Maryfield/01a_Albert_Street_Site_Location_Plan_and_Arrangement.pdf"},
  {:area_id=>5, :id=>1, :name=>"Maryfield", :image_url=>"Maryfield/01c_Albert_Street_post_office_resized.jpg"},
  {:area_id=>5, :id=>2, :name=>"Maryfield", :pdf_url=>"Maryfield/02a_Baxter_Park_Location_Plan_and_Footway.pdf"},
  {:area_id=>5, :id=>2, :name=>"Maryfield", :image_url=>"Maryfield/02c_Baxter_Park_footpaths_resized.jpg"},
  {:area_id=>5, :id=>3, :name=>"Maryfield", :pdf_url=>"Maryfield/03a_MARYFIELD_Drop_Kerb_Locations_Sheet_1_and_2.pdf"},
  {:area_id=>5, :id=>3, :name=>"Maryfield", :image_url=>"Maryfield/03c_MaryfieldWoodside_dropped_kerbs_resized.jpg"},
  {:area_id=>5, :id=>4, :name=>"Maryfield", :pdf_url=>"Maryfield/04a_Baffin_Street_Location_Plan_and_arrangements.pdf"},
  {:area_id=>5, :id=>4, :name=>"Maryfield", :image_url=>"Maryfield/04c_Baffin_Street_bollards_resized.jpg"},
  {:area_id=>5, :id=>5, :name=>"Maryfield", :pdf_url=>"Maryfield/05a_Crescent_Lane_Site_Location_Plan_and_Arrangements.pdf"},
  {:area_id=>5, :id=>5, :name=>"Maryfield", :image_url=>"Maryfield/05c_Crescent_Lane_resized.jpg"},
  {:area_id=>5, :id=>6, :name=>"Maryfield", :pdf_url=>"Maryfield/06a_Baffin_St_Stairs.pdf"},
  {:area_id=>5, :id=>6, :name=>"Maryfield", :image_url=>"Maryfield/06c_Baffin_St_Stairs_resized.jpg"},
  {:area_id=>5, :id=>0, :name=>"Maryfield", :pdf_url=>"Maryfield/Community_Infrastructure_Participatory_Budget_-_Finalised_List_of_Projects_Maryfield.pdf"},
  {:area_id=>6, :id=>1, :name=>"North East", :image_url=>"NorthEast/01 Multi-use games area in Cheviot Crescent.jpg"},
  {:area_id=>6, :id=>1, :name=>"North East", :pdf_url=>"NorthEast/01 Multi-use games area in Cheviot Crescent.pdf"},
  {:area_id=>6, :id=>2, :name=>"North East", :image_url=>"NorthEast/02 Mill O Mains Park and Middleton Wood.jpg"},
  {:area_id=>6, :id=>2, :name=>"North East", :pdf_url=>"NorthEast/02 Mill O Mains Park and Middleton Wood.pdf"},
  {:area_id=>6, :id=>3, :name=>"North East", :image_url=>"NorthEast/03 Improving skatingbmx area at Whitfield Green.jpg"},
  {:area_id=>6, :id=>3, :name=>"North East", :pdf_url=>"NorthEast/03 Improving skatingbmx area at Whitfield Green.pdf"},
  {:area_id=>6, :id=>4, :name=>"North East", :image_url=>"NorthEast/04 Outdoor exercise equipment at Fintry Park and the Dighty.jpg"},
  {:area_id=>6, :id=>4, :name=>"North East", :pdf_url=>"NorthEast/04 Outdoor exercise equipment at Fintry Park and the Dighty.pdf"},
  {:area_id=>6, :id=>5, :name=>"North East", :image_url=>"NorthEast/05 Improve pavement area Fintry Road.jpg"},
  {:area_id=>6, :id=>5, :name=>"North East", :pdf_url=>"NorthEast/05 Improve pavement area Fintry Road.pdf"},
  {:area_id=>6, :id=>6, :name=>"North East", :image_url=>"NorthEast/06 Dighty and Whitfield burn clean up.jpg"},
  {:area_id=>6, :id=>6, :name=>"North East", :pdf_url=>"NorthEast/06 Dighty and Whitfield burn clean up.pdf"},
  {:area_id=>6, :id=>7, :name=>"North East", :image_url=>"NorthEast/07 Improvement to Middleton Wood.jpg"},
  {:area_id=>6, :id=>7, :name=>"North East", :pdf_url=>"NorthEast/07 Improvement to Middleton Wood.pdf"},
  {:area_id=>6, :id=>8, :name=>"North East", :image_url=>"NorthEast/08 Extended entrance Drumgeith Park.jpg"},
  {:area_id=>6, :id=>8, :name=>"North East", :pdf_url=>"NorthEast/08 Extended entrance Drumgeith Park.pdf"},
  {:area_id=>6, :id=>9, :name=>"North East", :image_url=>"NorthEast/09 Fencing Murrayfield allotments.jpg"},
  {:area_id=>6, :id=>9, :name=>"North East", :pdf_url=>"NorthEast/09 Fencing Murrayfield allotments.pdf"},
  {:area_id=>6, :id=>10, :name=>"North East", :pdf_url=>"NorthEast/10 Footway improvements within Middleton Wood.pdf"},
  {:area_id=>6, :id=>10, :name=>"North East", :image_url=>"NorthEast/10 Footway improvements within Middleton Wood.pdf.jpg"},
  {:area_id=>7, :id=>1, :name=>"East End", :pdf_url=>"EastEnd/01_Adult_Gym_Equipment_at_Finlathen_Park.pdf"},
  {:area_id=>7, :id=>1, :name=>"East End", :image_url=>"EastEnd/01_Finlathen_Park_resized.jpg"},
  {:area_id=>7, :id=>2, :name=>"East End", :image_url=>"EastEnd/02_Pedestrian_Crossing_Arbroath_Rd_resized.jpg"},
  {:area_id=>7, :id=>2, :name=>"East End", :pdf_url=>"EastEnd/02_Pedestrian_Crossing_Arbroath_Road.pdf"},
  {:area_id=>7, :id=>3, :name=>"East End", :image_url=>"EastEnd/03_Balerno_Bowling_Green_resized.jpg"},
  {:area_id=>7, :id=>3, :name=>"East End", :pdf_url=>"EastEnd/03_Balerno_Bowling_Site_Plan.pdf"},
  {:area_id=>7, :id=>4, :name=>"East End", :pdf_url=>"EastEnd/04_CYCLE_PATH_WORKS_-_FINLATHEN_PARK_SITE_LOCATION.pdf"},
  {:area_id=>7, :id=>4, :name=>"East End", :image_url=>"EastEnd/04_Improve_cycle_paths_resized.jpg"},
  {:area_id=>7, :id=>5, :name=>"East End", :image_url=>"EastEnd/05_Play_area_St_Vincents_resized.jpg"},
  {:area_id=>7, :id=>5, :name=>"East End", :pdf_url=>"EastEnd/05_Site_Location_Plan_St_Vincents.pdf"},
  {:area_id=>7, :id=>0, :name=>"East End", :pdf_url=>"EastEnd/Community_Infrastructure_Participatory_Budget_-_List_of_Projects_East_End.pdf"},
  {:area_id=>8, :id=>1, :name=>"The Ferry", :image_url=>"TheFerry/01 Dropped kerbs Forthill area.jpg"},
  {:area_id=>8, :id=>1, :name=>"The Ferry", :pdf_url=>"TheFerry/01 Dropped kerbs Forthill area.pdf"},
  {:area_id=>8, :id=>2, :name=>"The Ferry", :image_url=>"TheFerry/02 Improve facilities in local playparks for children with disabilities.jpg"},
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

namespace :dundee_2017_ballot do
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
    name_en = budget_data[row_number][2]
    puts "name_en #{name_en} #{row_number}"
    price = budget_data[row_number][6]
    price = price.to_i*1000
    puts "Price is: #{price}"
    locations = budget_data[row_number][7]
    puts locations

    if budget_data[row_number][8] and budget_data[row_number][8]!=""
      puts budget_data[row_number][8]
      locations = "#{locations},#{budget_data[row_number][8]}"
    end

    description_en = budget_data[row_number][4]
    puts description_en

    found_url = find_image_url_for_area_item(area_id,  budget_data[row_number][0].to_i)
    if found_url.is_a? String
      image_url = "https://s3-eu-west-1.amazonaws.com/oav-direct-assets/Dundee_2017/areas/"+found_url
    else
      image_url = ""
    end
    puts "image_url: #{image_url}"

    found_pdf_url = find_pdf_url_for_area_item(area_id, budget_data[row_number][0].to_i)
    if found_pdf_url.is_a? String
      pdf_url = "https://s3-eu-west-1.amazonaws.com/oav-direct-assets/Dundee_2017/areas/"+found_pdf_url
    else
      pdf_url = ""
    end

    item = BudgetBallotItem.create!(:price=>price,
                                    :idea_id=>-1,
                                    :budget_ballot_area_id=>area_id,
                                    :locations=>locations,
                                    :image_url=>image_url,
                                    :pdf_url=>pdf_url,
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

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "Lochee"
      I18n.locale = "is"
      area.name = "Lochee"
      area.save
      import_area_data_dundee(area.id, budget_data, 5,8)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "West End"
      I18n.locale = "is"
      area.name = "West End"
      area.save
      import_area_data_dundee(area.id, budget_data, 17,5)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "Strathmartine"
      I18n.locale = "is"
      area.name = "Strathmartine"
      area.save
      import_area_data_dundee(area.id, budget_data, 26,9)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "Coldside"
      I18n.locale = "is"
      area.name = "Coldside"
      area.save
      import_area_data_dundee(area.id, budget_data, 40,9)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "Maryfield"
      I18n.locale = "is"
      area.name = "Maryfield"
      area.save
      import_area_data_dundee(area.id, budget_data, 52,6)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "North East"
      I18n.locale = "is"
      area.name = "North East"
      area.save
      import_area_data_dundee(area.id, budget_data, 61,10)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "East End"
      I18n.locale = "is"
      area.name = "East End"
      area.save
      import_area_data_dundee(area.id, budget_data, 74,5)

      area = BudgetBallotArea.create!(:budget_amount => 150000.0)
      I18n.locale = "en"
      area.name = "The Ferry"
      I18n.locale = "is"
      area.name = "The Ferry"
      area.save
      import_area_data_dundee(area.id, budget_data, 82,9)
    else
      puts "BALLOT BOX IS NOT EMPTY, NO ACTION TAKEN!"
    end
  end
end