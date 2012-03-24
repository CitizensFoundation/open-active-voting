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
    if left_of_budget>priority[:price]
      selected<<priority
      left_of_budget -= priority[:price]
    else
      break
    end
  end
  selected
end

namespace :ballot do
  desc "Generate test ballots"
  task(:generate_test_ballot => :environment) do
    number_of_voters = ENV['number_of_voters'].to_i
    neighborhood_id = ENV['neighborhood_id'].to_i
    ballot = ReykjavikBudgetBallot.new
    budget = ballot.get_neighborhood_budget(neighborhood_id)

    selected_construction_priorities = get_until_budget_full(budget,ballot.construction_priorities(neighborhood_id))
    selected_maintenance_priorities = get_until_budget_full(budget,ballot.maintenance_priorities(neighborhood_id))



  end

  desc "Generate ballot from CSV"
  task(:generate_ballot_from_csv => :environment) do
    @ballot = ReykjavikBudgetBallot.new
    @neighborhoods = Hash.new
    state = "waiting_for_neighborhood"
    current_neighborhood = nil
    master_id = 0
    letter_of_alphabet = ('a'..'m').to_a
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
          @neighborhoods[current_neighborhood[:id]][:construction_priorities] << { :letter=>letter_of_alphabet[construction_priorities_count+=1], :id=>master_id+=1, :link=>row[8], :description=>"new_project_description_id_#{master_id}", :name=>"new_project_name_id_#{master_id}",
                                                                        :name_is=>row[5], :description_is=>row[6], :price=>change_price_to_i(row[7]) }
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
          @neighborhoods[current_neighborhood[:id]][:maintenance_priorities] << {:letter=>letter_of_alphabet[maintenance_priorities_count+=1], :id=>master_id+=1, :link=>row[8], :description=>"new_project_description_id_#{master_id}", :name=>"new_project_name_id_#{master_id}",
                                                                                :name_is=>row[5], :description_is=>row[6], :price=>change_price_to_i(row[7]) }
        end
      end
    end
    main_outfile = ""
    is_yml = ""
    @neighborhoods.each do |id, project_types|
      project_types.each do |project_type,array|
        array.each do |item|
          is_yml += "#{item[:name]}: \"#{item[:name_is].strip}\"\n"
          is_yml += "#{item[:description]}: \"#{item[:description_is].strip.gsub(""",""")}\"\n"
          item.delete(:name_is)
          item.delete(:description_is)
          main_outfile += "@neighborhoods[#{id}][:#{project_type}] << {:id=>#{item[:id]}, :letter=>\"#{item[:letter]}\", :link=>\"#{item[:link]}\", :description=>I18n.t(:#{item[:description]}), :name=>I18n.t(:#{item[:name]}), :price=>#{item[:price].to_f/1000000.0}}\n"
        end
        main_outfile += "\n"
      end
    end
    puts main_outfile
    #puts is_yml
  end
end