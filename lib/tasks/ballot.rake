# coding: utf-8

require "csv"
require "ap"

class Array
  def shuffle
    sort_by { rand }
  end
end

def find_neighborhood(name)
  puts name
  if name and name!=""
    @ballot.neighborhoods.each do |neighborhood_id,hash_value|
      if hash_value[:name]==name
        puts "Found: #{hash_value}"
        return hash_value
        break
      end
    end
    return false
  else
    return false
  end
end

def change_price_to_i(price_txt)
  price_txt.gsub(" kr.","").gsub(",","").to_i
end

def get_until_budget_full(budget,priorities)
  selected = []

  left_of_budget = budget
  priorities.shuffle.each do |priority|
    if left_of_budget>=priority[:price]
      selected<<priority
      left_of_budget -= priority[:price]
    elsif left_of_budget<=0.0
      break
    end
  end
  selected
end

def create_html_doc(neighborhood_name,test_ballot_number,selected_construction_priorities_html,selected_maintenance_priorities_html)
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
  <table border="0" cellpadding="3" cellspacing="3">
    <tr>
      <td><b>Nýframkvæmdir</b></td>
      <td><b>Viðhaldsverkefni</b></td>
    </tr>
    <tr>
      <td><ul>
        GSUB_NYFRAMKVAEMDIR
      </ul></td>
      <td><ul>
        GSUB_VIDHALDSVERKEFNI
      </ul></td>
    </tr>
  </table>
  <p>&nbsp;</p>
  </body>
  </html>
DOC
  html = html.gsub("GSUB_NAFN_HVERFIS",neighborhood_name)
  html = html.gsub("GSUB_NUMERID_THITT",test_ballot_number.to_s)
  html = html.gsub("GSUB_NYFRAMKVAEMDIR",selected_construction_priorities_html)
  html = html.gsub("GSUB_VIDHALDSVERKEFNI",selected_maintenance_priorities_html)
  html
end

namespace :ballot do
  desc "Generate test ballots"
  task(:generate_test_ballot => :environment) do
    number_of_voters = ENV['number_of_voters'].to_i
    neighborhood_id = ENV['neighborhood_id'].to_i
    ballot = ReykjavikBudgetBallot.new
    budget = ballot.get_neighborhood_budget(neighborhood_id)

    Dir.mkdir("test_ballots") unless File.exists?("test_ballots")
    test_ballots = []
    number_of_voters.times do |test_ballot_number|
      selected_construction_priorities = get_until_budget_full(budget,ballot.construction_priorities(neighborhood_id))
      selected_construction_priorities_html = ""
      selected_construction_priorities_ids = []
      selected_construction_priorities.sort_by { |v| v[:letter] }.each do |priority|
        unless rand(40)==7 # Don't finish the budget 1/40 times
          selected_construction_priorities_ids << priority[:id]
          selected_construction_priorities_html+="<li class='litur'>#{priority[:letter].upcase} - #{priority[:name]}</li>"
        end
      end
      selected_maintenance_priorities = get_until_budget_full(budget,ballot.maintenance_priorities(neighborhood_id))
      selected_maintenance_priorities_html = ""
      selected_maintenance_priorities_ids = []
      selected_maintenance_priorities.sort_by { |v| v[:letter] }.each do |priority|
        unless rand(40)==7 # Don't finish the budget 1/40 times
          selected_maintenance_priorities_ids << priority[:id]
          selected_maintenance_priorities_html+="<li class='litur'>#{priority[:letter].upcase} - #{priority[:name]}</li>"
        end
      end
      puts html_out = create_html_doc(ballot.get_neighborhood_name(neighborhood_id),test_ballot_number+1,selected_construction_priorities_html,selected_maintenance_priorities_html)
      File.open("test_ballots/test_ballot_#{test_ballot_number+1}.html","w").write(html_out)
    end
  end

  def make_data_hash(row,master_id,count)
    letter_of_alphabet = ('a'..'m').to_a
    { :letter=>letter_of_alphabet[count],
      :id=>master_id,
      :name=>"new_project_name_id_#{master_id}",
      :description=>"new_project_description_id_#{master_id}",
      :name_is=>row[5], :description_is=>row[6],
      :name_en=>row[7], :description_en=>row[6],
      :price=>change_price_to_i(row[8]),
      :link=>row[9] }
  end


  class String
    def escape_quotes
      self.gsub(/["]/, '\\\\\"')
    end
  end

  desc "Generate ballot from CSV"
  task(:generate_ballot_from_csv => :environment) do
    @ballot = ReykjavikBudgetBallot.new
    @neighborhoods = Hash.new
    state = "waiting_for_neighborhood"
    current_neighborhood = nil
    master_id = 0

    construction_priorities_count = nil
    maintenance_priorities_count = nil

    CSV.parse(File.open(ENV['infile']).read).each do |row|
      #puts row
      if state=="waiting_for_neighborhood" and current_neighborhood = find_neighborhood(row[2])
        puts state = "wait_for_construction_priorities"
      elsif state == "wait_for_construction_priorities" and row[2]=="Nýframkvæmdir"
        puts state = "construction_priorities"
        construction_priorities_count = -1
      elsif state == "construction_priorities"
        if row[2]==nil
          puts state = "wait_for_maintenance_priorities"
        else
          #puts "Found project row: #{row}"
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:construction_priorities]=[] unless @neighborhoods[current_neighborhood[:id]][:construction_priorities]
          @neighborhoods[current_neighborhood[:id]][:construction_priorities] << make_data_hash(row,master_id+=1,construction_priorities_count+=1)
        end
      elsif state == "wait_for_maintenance_priorities" and row[2]=="Viðhaldsverkefni"
        puts state = "maintenance_priorities"
        maintenance_priorities_count = -1
      elsif state == "maintenance_priorities"
        if row[2]==nil
          puts state = "waiting_for_neighborhood"
        else
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:maintenance_priorities]=[] unless @neighborhoods[current_neighborhood[:id]][:maintenance_priorities]
          @neighborhoods[current_neighborhood[:id]][:maintenance_priorities] << make_data_hash(row,master_id+=1,maintenance_priorities_count+=1)
        end
      end
    end
    main_outfile = ""
    is_yml = ""
    en_yml = ""
    @neighborhoods.each do |id, project_types|
      project_types.each do |project_type,array|
        array.each do |item|
          is_yml += "#{item[:name]}: \"#{item[:name_is].strip}\"\n"
          is_yml += "#{item[:description]}: \"#{item[:description_is].strip.escape_quotes}\"\n"
          en_yml += "#{item[:name]}: \"#{item[:name_en].strip}\"\n"
          en_yml += "#{item[:description]}: \"#{item[:description_en].strip.escape_quotes}\"\n"
          item.delete(:name_is)
          item.delete(:description_is)
          main_outfile += "@neighborhoods[#{id}][:#{project_type}] << {:id=>#{item[:id]}, :letter=>\"#{item[:letter]}\", :link=>\"#{item[:link]}\", :description=>I18n.t(:#{item[:description]}), :name=>I18n.t(:#{item[:name]}), :price=>#{item[:price].to_f/1000000.0}}\n"
        end
        main_outfile += "\n"
      end
    end
    puts main_outfile
    #puts is_yml
    #puts en_yml
  end
end