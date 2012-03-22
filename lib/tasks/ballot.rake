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
        puts state = "wait_for_construction_priorities"
      elsif state == "wait_for_construction_priorities" and row[2]=="Nýframkvæmdir"
        puts state = "construction_priorities"
      elsif state == "construction_priorities"
        if row[2]==nil
          puts state = "wait_for_maintenance_priorities"
        else
          #puts "Found project row: #{row}"
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:construction_priorities]=[] unless @neighborhoods[current_neighborhood[:id]][:construction_priorities]
          @neighborhoods[current_neighborhood[:id]][:construction_priorities] << { :id=>master_id+=1, :link=>row[8], :description=>"new_project_description_id_#{master_id}", :name=>"new_project_name_id_#{master_id}",
                                                                        :name_is=>row[5], :description_is=>row[6], :price=>change_price_to_i(row[7]) }
        end
      elsif state == "wait_for_maintenance_priorities" and row[2]=="Viðhaldsverkefni"
        puts state = "maintenance_priorities"
      elsif state == "maintenance_priorities"
        if row[2]==nil
          puts state = "waiting_for_neighborhood"
        else
          @neighborhoods[current_neighborhood[:id]]=Hash.new unless @neighborhoods[current_neighborhood[:id]]
          @neighborhoods[current_neighborhood[:id]][:maintenance_priorities]=[] unless @neighborhoods[current_neighborhood[:id]][:maintenance_priorities]
          @neighborhoods[current_neighborhood[:id]][:maintenance_priorities] << { :id=>master_id+=1, :link=>row[8], :description=>"new_project_description_id_#{master_id}", :name=>"new_project_name_id_#{master_id}",
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
          main_outfile += "@neighborhoods[#{id}][:#{project_type}] << {:id=>#{item[:id]}, :link=>\"#{item[:link]}\", :description=>I18n.t(:#{item[:description]}), :name=>I18n.t(:#{item[:name]}), :price=>#{item[:price].to_f/1000000.0}}\n"
        end
        main_outfile += "\n"
      end
    end
    puts main_outfile
    #puts is_yml
  end
end