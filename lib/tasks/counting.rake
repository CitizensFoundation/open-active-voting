# coding: utf-8

# Copyright (C) 2010-2016 Íbúar ses / Citizens Foundation Iceland
# Authors Robert Bjarnason, Gunnar Grimsson & Gudny Maren Valsdottir
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

namespace :counting do
  desc "Voting status"
  task(:status => :environment) do
    puts "Heildarfjöldi innsendra atkvæða #{Vote.count}"
    puts "Heildarfjöldi kjósenda #{Vote.count('user_id_hash', :distinct => true)}"
  end

  desc "Count all votes"
  task(:count => :environment) do
    raise "Missing private_key parameters" unless ENV['private_key']
    Dir.mkdir("results") unless File.exists?("results")
    puts
    puts "Starting vote counting"
    puts "----------------------"
    puts "Total votes #{Vote.count}"
    puts "Total voters #{Vote.count('user_id_hash', :distinct => true)}"
    puts

    puts "Splitting user id hash and vote and generating final votes database tables"
    Vote.split_and_generate_final_votes!
    puts

    BudgetBallotArea.all.each do |area|
      puts "Counting votes for area: #{area.name}"
      count  = BudgetVoteCounting.new(ENV['private_key'])
      count.count_unique_votes(area.id)

      puts "Writing unencrypted audit report"
      count.write_counted_unencrypted_audit_report

      puts "Count complete for: #{area.name}"
      puts
    end
    puts "All vote counting completed"
    puts "---------------------------"
  end
end