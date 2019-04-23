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
    name_is = budget_data[row_number][3]
    puts name_is
    price = budget_data[row_number][4]
    price = price.gsub(',','')
    price = price.gsub(' kr.','')
    price = price.to_i / 1000000
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
    puts "========================================================="
  end

  def ballot_import_area_data(area_id, budget_data, start_row_number)
    current_row_number = start_row_number -1

    while current_row_number < start_row_number+19  do
      ballot_create_budget_ballot_item(area_id, budget_data, current_row_number)
      current_row_number +=1
    end
  end

  def create_vote(area_id)
    all_items = BudgetBallotItem.where(:budget_ballot_area_id=>area_id).all
    area = BudgetBallotArea.where(:id=>area_id).first
    puts "Area budget: #{area.budget_amount}"
    selected_item_ids = []
    total_price = 0.0
    (rand(10)+1).times do
      item = all_items[rand(all_items.length-1)]
      puts "Item price: #{item.price}"
      if (area.budget_amount>=total_price+item.price)
        selected_item_ids.push(item.id)
        total_price += item.price
      else
        puts "Item does not fit into budget!"
      end
    end

    selected_item_ids = selected_item_ids.uniq

    if (rand(2)==1)
      favorite_item_id =  selected_item_ids[rand(selected_item_ids.length-1)]
    end
    vote = { :selectedItemIds => selected_item_ids, :favoriteItemId => favorite_item_id }
    puts vote.to_json
    vote.to_json
  end

  desc "Add test ballots for counting"
  task(:add_test_ballots => :environment) do
    public_key =  OpenSSL::PKey::RSA.new(BudgetConfig.current.public_key)

    total_ballots = 10000
    number_of_areas = 10
    share_authenticated = 0.5
    session_id = SecureRandom.hex(20)

    if Vote.count==0
      total_ballots.times do
        area_id = rand(number_of_areas)+1
        vote = create_vote(area_id).to_s
        puts "VoteText: #{vote}"
        puts "VoteObj: #{JSON.parse vote}"
        payload = Base64.encode64(public_key.public_encrypt(Base64.encode64(vote)))
        unless rand(10)==5
          session_id = SecureRandom.hex(20)
        end

        if rand(2)==1
          saml_assertion_id = rand(640000)
          user_id_hash = session_id
          authenticated_at = Time.now
          encrypted_vote_checksum = Vote.generate_encrypted_checksum(user_id_hash,payload,'127.0.0.1',area_id,session_id)
        else
          saml_assertion_id = nil
          encrypted_vote_checksum = "not authenticated"
          user_id_hash = "not authenticated"
          authenticated_at = nil
        end

        if Vote.create(:user_id_hash => user_id_hash,
          :payload_data => payload,
          :client_ip_address => "127.0.0.1",
          :area_id => area_id,
          :authenticated_at => authenticated_at,
          :session_id => session_id,
          :saml_assertion_id => saml_assertion_id,
          :encrypted_vote_checksum => encrypted_vote_checksum)
          puts "Vote created"
        else
          puts "CREATE ERROR"
        end
      end
    else
      puts "ERROR - VOTE DATABASE NOT EMPTY"
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
    config.auth_url = "https://www.island.is/audkenning?id=ktest.betrireykjavik.is"
    config.saml_idp_cert_fingerprint = "08:95:CE:CC:8B:04:F6:B9:9E:E3:DC:59:B6:A0:C4:CE:E7:7E:86:C9"
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
    puts "Config ok"
  end

  desc "Set advania config"
  task(:set_advania_config => :environment) do
    config=BudgetConfig.first
    config.auth_url = "https://audkenning.vottun.is/Login/Login?electionId=72821bfa-364b-4a00-9a37-aaa838d1d3b0&returnUrl=https%3A%2F%2Fktest.betrireykjavik.is%2Fauthenticate_from_island_is"
    config.saml_idp_cert_fingerprint = "23:81:C3:16:7A:8C:A8:77:2E:A6:00:26:5E:1E:EA:51:1E:66:28:C5"
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
    puts "Config ok"
  end

  desc "Set rvk config"
  task(:set_rvk_config => :environment) do
    config=BudgetConfig.first
    config.auth_url = "https://audkenning.vottun.is/Login/Login?electionId=c89bfd2d-1996-4cbd-8fbc-13f09c84503f&returnUrl=https%3A%2F%2Fkosning2018.reykjavik.is%2Fauthenticate_from_island_is"
    config.saml_idp_cert_fingerprint = "23:81:C3:16:7A:8C:A8:77:2E:A6:00:26:5E:1E:EA:51:1E:66:28:C5"
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
    puts "Config ok"
  end

  desc "Set config"
  task(:set_config => :environment) do
    config=BudgetConfig.first
    unless config
      config=BudgetConfig.new
      config.timeout_in_seconds = 600
    end
    config.auth_url = ENV['url']
    config.saml_idp_cert_fingerprint = ENV['fingerprint']
    config.ideas_without_pdfs = "[]"
    config.save(:validate=>false)
    puts "Config ok"
  end

  desc "Reset Kópavogur Ballot from CSV"
  task(:reset_kopavogur_ballot_data_from_csv => :environment) do

    BudgetBallotItem.delete_all
    BudgetBallotArea.delete_all
    BudgetConfig.delete_all

    # TEST PUBLIC KEY
    #public_key = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvBihRQO8VAT/e1Uapq1S\nTuXxaWeMPo57OyZy+7RA7TXscJVUzj87S7jE/xwZr/uQGHksy0M9upS8LbgrrG3s\nRlGgmjDKffHejkYbNCMDcAVvJcf+iL5qk1aVakHCKVEPd/860XpMCOl6nhGtu4vz\nUVCYyURPoAkc4F44MRGj+clzk0Cc4t//EIfq26IUpsDmDed3Yg8dOAU17Rg9cbl+\no9aV/4+Og1Q4rr/Zg9nASAqeb1ctzJopwFnzt14V3H3LFQC8pj6m7Ke1al/MRkTw\nvAWJruujNtVoLPfwkO6GW2a3GE3e223iwxo1A85zIk7L8bqkmmzfxL7ky4IGA/bx\ncQIDAQAB\n-----END PUBLIC KEY-----"

    budget_data = CSV.parse(File.open(ENV['infile']).read)

    karsnes = BudgetBallotArea.create!(:budget_amount => 32.0)
    I18n.locale = "is"
    karsnes.name = "Kársnes"
    karsnes.save
    I18n.locale = "en"
    karsnes.name = "Kársnes"
    karsnes.save

    ballot_import_area_data(karsnes.id, budget_data, 12)

    digranes = BudgetBallotArea.create!(:name => "Digranes", :budget_amount => 64.0)
    I18n.locale = "is"
    digranes.name = "Digranes"
    digranes.save
    I18n.locale = "en"
    digranes.name = "Digranes"
    digranes.save
    ballot_import_area_data(digranes.id, budget_data, 37)

    smarinn = BudgetBallotArea.create!(:name => "Smárinn", :budget_amount => 23.0)
    I18n.locale = "is"
    smarinn.name = "Smárinn"
    smarinn.save
    I18n.locale = "en"
    smarinn.name = "Smárinn"
    smarinn.save
    ballot_import_area_data(smarinn.id, budget_data, 61)

    fifuhvammur = BudgetBallotArea.create!(:name => "Lindir og Salir", :budget_amount => 37.0)
    I18n.locale = "is"
    fifuhvammur.name = "Lindir og Salir"
    fifuhvammur.save
    I18n.locale = "en"
    fifuhvammur.name = "Lindir og Salir"
    fifuhvammur.save
    ballot_import_area_data(fifuhvammur.id, budget_data, 86)

    vatnsendi = BudgetBallotArea.create!(:name => "Vatnsendi", :budget_amount => 44.0)
    I18n.locale = "is"
    vatnsendi.name = "Vatnsendi"
    vatnsendi.save
    I18n.locale = "en"
    vatnsendi.name = "Vatnsendi"
    vatnsendi.save
    ballot_import_area_data(vatnsendi.id, budget_data, 112)
  end
end