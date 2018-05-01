# coding: utf-8

require "csv"
#require "ap"
require 'net/http'
require 'net/https'

class Array
  def shuffle
    sort_by { rand }
  end
end

def change_price_to_i(price_txt)
  price_txt.gsub(" kr.","").gsub(",","").to_i
end

def ideas_with_letters(budget_ballot_area_id)
  all_ideas = BudgetBallotItem.where(:budget_ballot_area_id=>budget_ballot_area_id).all
  all_ideas.each_with_index do |idea,index|
    letter = BudgetBallotItem::ALLOWED_BALLOT_CHARACTERS[index]
    idea.letter = letter
  end
  all_ideas
end

def get_until_budget_full(budget,ideas)
  selected = []

  left_of_budget = budget
  ideas.shuffle.each_with_index do |idea|
    if left_of_budget>=idea[:price]
      selected<<idea
      left_of_budget -= idea[:price]
    elsif left_of_budget<=0.0
      break
    end
  end
  selected
end

def create_html_doc(area_name,test_ballot_number,selected_ideas_html)
  html = <<DOC
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Untitled Document</title>
  <style type="text/css">
  .litur {
          background-color: #e9e9e9;
  }
  li {
          list-style-type: none;
          padding: 3px;
          margin-bottom: 5px;
  }
  td {
          vertical-align: top;
  }
  ul {
          margin: 3px;
          padding: 2px;
  }
  </style>
  </head>

  <body>
  <h2>Betri hverfi - Forskrift vegna prófana á kosningakerfi</h2>
  <h1>GSUB_NAFN_HVERFIS</h1>
  <h3>Númer þitt er GSUB_NUMERID_THITT</h3>
  
  <h3 style='color:red'>Vinsamlegast kjóstu nákvæmlega eins og sýnt er hér að neðan!</h3>
  <h4 style='color:red'>Ekki gleyma að senda tölvupóst á <a href='betrireykjavik@ibuar.is'>betrireykjavik@ibuar.is</a> með númerinu þínu eftir að þú hefur kosið.</h4>

<h3>Aðgangur að kosningavef vegna þessarar prufu</h3>
<h4>https://kjosa.betrireykjavik.is/</h4>
<h4>Notandanafn: test2014 </h4>
<h4>Lykilorð: AizeiNg7 </h4>
<br />
  
  <table border="0" cellpadding="3" cellspacing="3">
    <tr>
      <td><ul>
        GSUB_FRAMKVAEMDIR
      </ul></td>
    </tr>
  </table>
  <p>&nbsp;</p>
  </body>
  </html>
DOC
  html = html.gsub("GSUB_NAFN_HVERFIS",area_name)
  html = html.gsub("GSUB_NUMERID_THITT",test_ballot_number.to_s)
  html = html.gsub("GSUB_FRAMKVAEMDIR",selected_ideas_html)
  html
end

namespace :ballot do

  desc "Generate ids,letter and names"
  task(:ids_to_letters => :environment) do
    area_id = ENV['area_id'].to_i
    ballot = BudgetBallotItem.current
    puts "Construction"
    ballot.areas[area_id][:ideas].each do |idea|
      puts "#{idea[:letter]},#{idea[:id]},#{idea[:name]}"
    end
  end

  desc "Generate test ballots"
  task(:generate_test_ballot => :environment) do
    number_of_voters = ENV['number_of_voters'] ? ENV['number_of_voters'].to_i : 12
    area_id = ENV['area_id'] ? ENV['area_id'].to_i : rand(9)+1
    budget = BudgetBallotItem.get_area_budget(area_id)
    if ENV['offset']
      offset = 1+ENV['offset'].to_i
    else
      offset = 1
    end

    Dir.mkdir("test_ballots") unless File.exists?("test_ballots")
    test_ballots = []
    number_of_voters.times do |test_ballot_number|
      selected_ideas = get_until_budget_full(budget,ideas_with_letters(area_id))
      selected_ideas_html = ""
      selected_ideas_ids = []
      selected_ideas.sort_by { |v| v[:letter] }.each do |idea|
        unless rand(40)==7 # Don't finish the budget 1/40 times
          selected_ideas_ids << idea[:id]
          puts idea.inspect
          selected_ideas_html+="<li class='litur'>#{idea[:letter].upcase} - #{idea[:name]}</li>"
        end
      end
      puts html_out = create_html_doc(BudgetBallotItem.get_area_name(area_id),test_ballot_number+offset,selected_ideas_html)
      File.open("test_ballots/test_ballot_#{test_ballot_number+offset}.html","w").write(html_out)
    end
  end

  desc "Generate test ballots all"
  task(:generate_test_ballot_all => :environment) do
    number_of_voters = ENV['number_of_voters'] ? ENV['number_of_voters'].to_i : 5
    if ENV['offset']
      offset = 1+ENV['offset'].to_i
    else
      offset = 1
    end

    Dir.mkdir("test_ballots_all") unless File.exists?("test_ballots_all")

    (1..10).each do |area_id|
      budget = BudgetBallotItem.get_area_budget(area_id)
      number_of_voters.times do |test_ballot_number|
        selected_ideas = get_until_budget_full(budget,ideas_with_letters(area_id))
        selected_ideas_html = ""
        selected_ideas_ids = []
        selected_ideas.sort_by { |v| v[:letter] }.each do |idea|
          unless rand(40)==7 # Don't finish the budget 1/40 times
            selected_ideas_ids << idea[:id]
            puts idea.inspect
            selected_ideas_html+="<li class='litur'>#{idea[:letter].upcase} - #{idea[:name]}</li>"
          end
        end
        puts html_out = create_html_doc(BudgetBallotItem.get_area_name(area_id),test_ballot_number+offset,selected_ideas_html)
        Dir.mkdir("test_ballots_all/#{area_id}") unless File.exists?("test_ballots_all/#{area_id}")
        File.open("test_ballots_all/#{area_id}/#{area_id}_test_ballot_#{test_ballot_number+offset}.html","w").write(html_out)
      end
    end
  end

  def make_data_hash(row,master_id,count)
    puts row[5]

    letter_of_alphabet = BudgetBallotItem::ALLOWED_BALLOT_CHARACTERS
    { :letter=>letter_of_alphabet[count],
      :id=>master_id,
      :name=>"new_project_name_id_#{master_id}",
      :description=>"new_project_description_id_#{master_id}",
      :name_is=>row[4], :description_is=>row[6],
      :name_en=>row[7], :description_en=>row[6],
      :price=>change_price_to_i(row[5]),
      :link=>row[2] }
  end

  class String
    def escape_quotes
      self.gsub(/["]/, '\\\\\"')
    end
  end

  desc "Empty ballot box"
  task(:destroy_and_empty_ballot_box => :environment) do
    Vote.delete_all
  end

  desc "Generate ballot from CSV"
  task(:recreate_from_static => :environment) do
    BudgetBallotItem.destroy_all
    ballot = BudgetBallotItem.new
    ballot.initialize_from_static_data
    ballot.save
  end

  desc "Generate ballot from CSV"
  task(:generate_ballot_from_csv => :environment) do
    @ballot = BudgetBallotItem.current
    @areas = Hash.new
    state = "waiting_for_neighborhood"
    current_neighborhood = nil
    master_id = 0

    ideas_count = 0

    CSV.parse(File.open(ENV['infile']).read).each do |row|
      #puts "#{master_id} #{row}"
      if row[0]=="Neighborhood Id"
        current_neighborhood = row[1].to_i
        ideas_count = -1
      elsif row[0]=="END"
        puts "The End of the import document"
      else
        @areas[current_neighborhood]=Hash.new unless @areas[current_neighborhood]
        @areas[current_neighborhood][:ideas]=[] unless @areas[current_neighborhood][:ideas]
        @areas[current_neighborhood][:ideas] << make_data_hash(row,master_id+=1,ideas_count+=1)
      end
    end
    main_outfile = ""
    is_yml = ""
    en_yml = ""
    @areas.each do |id, project_types|
      project_types.each do |project_type,array|
        array.each do |item|
          is_yml += "#{item[:name]}: \"#{item[:name_is].strip.escape_quotes}\"\n"
          is_yml += "#{item[:description]}: \"#{item[:description_is].strip.escape_quotes}\"\n"
          en_yml += "#{item[:name]}: \"#{item[:name_en].strip.escape_quotes}\"\n"
          en_yml += "#{item[:description]}: \"#{item[:description_en].strip.escape_quotes}\"\n"
          item.delete(:name_is)
          item.delete(:description_is)
          main_outfile += "@areas[#{id}][:#{project_type}] << {:id=>#{item[:id]}, :letter=>\"#{item[:letter]}\", :link=>\"#{item[:link]}\", :description=>I18n.t(:#{item[:description]}), :name=>I18n.t(:#{item[:name]}), :price=>#{item[:price].to_f/1000000.0}}\n"
        end
        main_outfile += "\n"
      end
    end
    #puts main_outfile
    #puts is_yml
    puts en_yml
  end

  def ballot_create_budget_ballot_item(area_id, budget_data, row_number)
    #puts budget_data[row_number]
    name_is = budget_data[row_number][1]
    puts name_is

    usage =  budget_data[row_number][2]
    review =  budget_data[row_number][3]

    description_is = usage+"---SPLIT---"+review
    puts description_is

    item = BudgetBallotItem.create!(:price=>0.0,
                                    :idea_id=>-1,
                                    :budget_ballot_area_id=>area_id,
                                    :idea_url=>"")

    I18n.locale = "is"
    item.name = name_is
    item.description = description_is
    item.save
  end

  def ballot_import_area_data(area_id, budget_data, start_row_number)
    current_row_number = start_row_number -1

    while budget_data[current_row_number][1]!="THE END" do
      ballot_create_budget_ballot_item(area_id, budget_data, current_row_number)
      current_row_number +=1
    end
  end

  desc "Clear all but two"


  task(:clear_all_but_two => :environment) do
    BudgetBallotItem.all.each do |item|
      if item.id!=202 and item.id!=201
        item.destroy
      end
    end
  end

  task(:display_name_id => :environment) do
    I18n.locale = "is"
    BudgetBallotItem.all.each do |item|
      puts "#{item.id} - #{item.name} #{item.price}"
    end
  end

  desc "Set ktest config"
  task(:set_ktest_config => :environment) do
    config=BudgetConfig.first
    config.rsk_url = "https://www.island.is/audkenning?id=ktest.betrireykjavik.is"
    config.saml_idp_cert_fingerprint = "3D:EE:51:23:24:AA:E1:7B:47:1C:D3:04:32:B3:86:3A:46:74:DA:83"
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
  end

  desc "Set rvk config"
  task(:set_rvk_config => :environment) do
    config=BudgetConfig.first
    config.rsk_url = "https://audkenning.vottun.is/Login/Login?electionId=c89bfd2d-1996-4cbd-8fbc-13f09c84503f&returnUrl=https%3A%2F%2Fkosning.reykjavik.is%2Fauthenticate_from_island_is"
    config.saml_idp_cert_fingerprint = "54:54:6c:a2:93:d0:af:bf:11:5d:7c:8b:dc:4c:72:12:c8:99:80:95"
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
  end

  desc "Set config"
  task(:set_config => :environment) do
    config=BudgetConfig.first
    unless config
      config=BudgetConfig.new
      config.timeout_in_seconds = 600
    end
    config.rsk_url = ENV['url']
    config.saml_idp_cert_fingerprint = ENV['fingerprint']
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
  end

  desc "Reset Saga Ballot from CSV"
  task(:reset_saga_ballot_data_from_csv => :environment) do

    if Vote.count == 0
      BudgetBallotItem.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_items")
      BudgetBallotArea.delete_all
      ActiveRecord::Base.connection.execute("TRUNCATE budget_ballot_areas")

      budget_data = CSV.parse(File.open(ENV['infile']).read)

      ballot = BudgetBallotArea.create!(:budget_amount => 1.0)
      I18n.locale = "is"
      ballot.name = "Nafnakosning"
      ballot.save
      I18n.locale = "en"
      ballot.name = "Naming vote"
      ballot.save

      ballot_import_area_data(ballot.id, budget_data, 2)
    else
      puts "BALLOT BOX IS NOT EMPTY, NO ACTION TAKEN!"
    end
  end
end