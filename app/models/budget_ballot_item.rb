# coding: utf-8

# Copyright (C) 2010-2018 Íbúar ses / Citizens Foundation Iceland
# Authors Robert Bjarnason, Gunnar Grimsson, Gudny Maren Valsdottir & Alexander Mani Gautason
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

class BudgetBallotItem < ActiveRecord::Base

  belongs_to :budget_ballot_area
  translates :name, :description

  attr_accessor :name_is, :name_en, :name_pl, :description_is, :description_en, :description_pl

  ALLOWED_BALLOT_CHARACTERS = ('a'..'z').to_a+['0','1','2','3','4','5','6','7','8','9']

  def self.items(area_id)
    BudgetBallotArea.find(area_id).budget_ballots_items
  end

  def self.get_area_budget(area_id)
    # Get the given neighborhood budget
    BudgetBallotArea.find(area_id).budget_amount
  end

  def self.get_area_name(area_id)
    # Get the given neighborhood budget
    BudgetBallotArea.find(area_id).name
  end

  def self.get_item_name(area_id,id)
    # Get the given item name
    BudgetBallotItem.where(:budget_ballot_area_id=>area_id, :id=>id).first.name
  end

  def self.get_item_description(area_id, id)
    # Get the given item description
    BudgetBallotItem.where(:budget_ballot_area_id=>area_id, :id=>id).first.description
  end

  def self.get_item_link(area_id, id)
    # Get the given item link
    BudgetBallotItem.where(:budget_ballot_area_id=>area_id, :id=>id).first.item_url
  end

  def self.get_item_price(area_id, id)
    # Get the given item price
    BudgetBallotItem.where(:budget_ballot_area_id=>area_id, :id=>id).first.price
  end
end