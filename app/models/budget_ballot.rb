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

  belongs_to :budget_ballot_area

  translates :name, :description

  ALLOWED_BALLOT_CHARACTERS = ('a'..'z').to_a+['0','1','2','3','4','5','6','7','8','9']

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

  def self.get_idea_name(area_id,idea_id)
    # Get the given idea name
    BudgetBallot.where(:budget_ballot_area_id=>area_id, :idea_id=>idea_id).first.name
  end

  def self.get_idea_description(area_id, idea_id)
    # Get the given idea description
    BudgetBallot.where(:budget_ballot_area_id=>area_id, :idea_id=>idea_id).first.description
  end

  def self.get_idea_link(area_id, idea_id)
    # Get the given idea link
    BudgetBallot.where(:budget_ballot_area_id=>area_id, :idea_id=>idea_id).first.link
  end

  def self.get_idea_price(area_id, idea_id)
    # Get the given idea price
    BudgetBallot.where(:budget_ballot_area_id=>area_id, :idea_id=>idea_id).first.price
  end
end