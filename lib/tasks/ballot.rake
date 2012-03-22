# coding: utf-8

require "csv"
require "ap"

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

namespace :ballot do
  desc "Generate ballot from CSV"
  task(:generate_ballot_from_csv => :environment) do
    @ballot = ReykjavikBudgetBallot.new
    @neighborhoods = Hash.new
    state = "waiting_for_neighborhood"
    current_neighborhood = nil
    master_id = 0
    CSV.parse(File.open(ENV['infile']).read).each do |row|
      #puts row
      if state=="waiting_for_neighborhood" and current_neighborhood = find_neighborhood(row[2])
        puts state = "wait_for_new_projects"
      elsif state == "wait_for_new_projects" and row[2]=="Nýframkvæmdir"
        puts state = "new_projects"
      elsif state == "new_projects"
        if row[2]==nil
          puts state = "wait_for_maintenance_projects"
        else
          #puts "Found project row: #{row}"
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:new_projects]=[] unless @neighborhoods[current_neighborhood[:id]][:new_projects]
          @neighborhoods[current_neighborhood[:id]][:new_projects] << { :id=>master_id+=1, :link=>row[8], :name_is=>row[5], :description_is=>row[6], :price=>change_price_to_i(row[7]) }
        end
      elsif state == "wait_for_maintenance_projects" and row[2]=="Viðhaldsverkefni"
        puts state = "maintenance_projects"
      elsif state == "maintenance_projects"
        if row[2]==nil
          puts state = "waiting_for_neighborhood"
        else
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:maintenance_projects]=[] unless @neighborhoods[current_neighborhood[:id]][:maintenance_projects]
          @neighborhoods[current_neighborhood[:id]][:maintenance_projects] << { :id=>master_id+=1, :link=>row[8], :name_is=>row[5], :description_is=>row[6], :price=>change_price_to_i(row[7]) }
        end
      end
    end
    puts ap @neighborhoods
  end
end