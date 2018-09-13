# coding: utf-8

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

def search_files(id)
  found = nil
  puts id
  @@all_files.each { |x| 
    if x.include? "#{id}-"
      found = x
      puts "Found #{x}"
      break
    end
  }
  return found  
end

namespace :reykjavik_design_rename do

  def rename_files_row(root, path, budget_data, row_number, index_row_number)
    idea_url =  budget_data[row_number][14]
    puts idea_url

    if idea_url
      idea_id = idea_url.split('/').last
      file_path = search_files(budget_data[row_number][0])
      if file_path and File.file?(file_path)
        new_file_name = root+"/out/"+"moreProjectInformation_#{idea_id}.pdf"
        FileUtils.cp(file_path, new_file_name)
        puts "Copying #{file_path} to #{new_file_name}"
      else
        puts "NOT FOUND #{idea_id} !!!!!!!!!!!!!!!!!!!!! #{file_path}"
        @@not_found_ids << [budget_data[row_number], index_row_number, idea_id]
      end
    end
  end

  def rename_files(root, sub_root, budget_data, start_row_number, total_number_of_rows=20)
    current_row_number = start_row_number -1
    index_row_number = 1
    while current_row_number < start_row_number+(total_number_of_rows-1)  do
      rename_files_row(root, root+sub_root, budget_data, current_row_number, index_row_number)
      current_row_number +=1
      index_row_number += 1
    end
  end

  desc "Rename design documents from CSV"
  task(:rename => :environment) do

    root = "/home/robert/Downloads/hm2018_design"
    @@not_found_ids = []
    @@all_files = Dir.glob("#{root}/**/*")
    budget_data = CSV.parse(File.open(ENV['infile']).read)

    puts @@all_files
    puts budget_data.length

    rename_files(root, 'arbaer', budget_data, 2, 23)
    rename_files(root, 'breidholt', budget_data, 26, 25)
    rename_files(root, 'grafarholt', budget_data, 52, 24)
    rename_files(root, 'grafarvogur', budget_data, 77, 25)
    rename_files(root, 'haaleiti', budget_data, 103, 24)
    rename_files(root, 'hlidar', budget_data, 128, 24)
    rename_files(root, 'kjalarnes', budget_data, 153, 19)
    rename_files(root, 'laugardalur', budget_data, 173, 25)
    rename_files(root, 'midborg', budget_data, 199, 25)
    rename_files(root, 'vesturbaer', budget_data, 225, 25)
    puts "Not found ids: #{@@not_found_ids}"
    puts "The end"
  end
end