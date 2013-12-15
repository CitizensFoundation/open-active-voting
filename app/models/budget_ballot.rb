# coding: utf-8

# Copyright (C) 2010-2013 Íbúar ses
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

class BudgetBallot < ActiveRecord::Base
  set_table_name "budget_ballot"

  belongs_to :budget_ballot_area

  translates :name, :text

  ALLOWED_BALLOT_CHARACTERS = ('a'..'z').to_a+['0','1','2','3','4','5','6','7','8','9']

  def self.current
    BudgetBallot.new
  end

  def self.ideas(area_id)
    BudgetBallotArea.find(area_id).budget_ballots
  end

  def self.get_area_budget(area_id)
    # Get the given neighborhood budget
    budget = BudgetBallotArea.find(area_id).budget_amount
    (budget/"1.000.000".gsub(".","").to_f).round(1)
  end

  def self.get_area_name(area_id)
    # Get the given neighborhood budget
    BudgetBallotArea.find(area_id).name
  end

  def self.get_idea_name(idea_id)
    # Get the given idea name
    BudgetBallot.find_by_idea_id()
  end

  def get_idea_description(area_id, idea_id)
    # Get the given idea description
    description = nil
    all = self.areas[area_id][:ideas]
    all.each do |p|
      if p[:id]==idea_id
        description = p[:description]
        break
      end
    end
    description
  end

  def get_idea_link(area_id, idea_id)
    # Get the given idea description
    link = nil
    all = self.areas[area_id][:ideas]
    all.each do |p|
      if p[:id]==idea_id
        link = p[:link]
        break
      end
    end
    link
  end

  def get_idea_price(area_id, idea_id)
    # Get the given idea price
    name = nil
    all = self.areas[area_id][:ideas]
    all.each do |p|
      if p[:id]==idea_id
        name = p[:price]
        break
      end
    end
    name
  end
end