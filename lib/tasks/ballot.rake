# coding: utf-8

require "csv"
#require "ap"

class Array
  def shuffle
    sort_by { rand }
  end
end

def change_price_to_i(price_txt)
  price_txt.gsub(" kr.","").gsub(",","").to_i
end

def get_until_budget_full(budget,ideas)
  selected = []

  left_of_budget = budget
  ideas.shuffle.each do |idea|
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
<h4>Notandanafn: test2013 </h4>
<h4>Lykilorð : 2013test </h4>
<br />
  
  <table border="0" cellpadding="3" cellspacing="3">
    <tr>
      <td><b>Framkvæmdir</b></td>
    </tr>
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
    ballot = BudgetBallot.current
    puts "Construction"
    ballot.areas[area_id][:ideas].each do |idea|
      puts "#{idea[:letter]},#{idea[:id]},#{idea[:name]}"
    end
  end

  desc "Generate test ballots"
  task(:generate_test_ballot => :environment) do
    number_of_voters = ENV['number_of_voters'] ? ENV['number_of_voters'].to_i : 5
    area_id = ENV['area_id'] ? ENV['area_id'].to_i : rand(9)+1
    ballot = BudgetBallot.current
    budget = ballot.get_area_budget(area_id)
    if ENV['offset']
      offset = 1+ENV['offset'].to_i
    else
      offset = 1
    end

    Dir.mkdir("test_ballots") unless File.exists?("test_ballots")
    test_ballots = []
    number_of_voters.times do |test_ballot_number|
      selected_ideas = get_until_budget_full(budget,ballot.ideas(area_id))
      selected_ideas_html = ""
      selected_ideas_ids = []
      selected_ideas.sort_by { |v| v[:letter] }.each do |idea|
        unless rand(40)==7 # Don't finish the budget 1/40 times
          selected_ideas_ids << idea[:id]
          selected_ideas_html+="<li class='litur'>#{idea[:letter].upcase} - #{idea[:name]}</li>"
        end
      end
      puts html_out = create_html_doc(ballot.get_area_name(area_id),test_ballot_number+offset,selected_ideas_html)
      File.open("test_ballots/test_ballot_#{test_ballot_number+offset}.html","w").write(html_out)
    end
  end

  def make_data_hash(row,master_id,count)

    puts row[5]

    letter_of_alphabet = BudgetBallot::ALLOWED_BALLOT_CHARACTERS
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

  desc "Generate ballot from CSV"
  task(:recreate_from_static => :environment) do
    BudgetBallot.destroy_all
    ballot = BudgetBallot.new
    ballot.initialize_from_static_data
    ballot.save
  end

  desc "Generate ballot from CSV"
  task(:generate_ballot_from_csv => :environment) do
    @ballot = BudgetBallot.current
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
end