# coding: utf-8

class ReykjavikBudgetBallot
  attr_reader :construction_priorities
  attr_reader :maintenance_priorities

  def initialize
    @construction_priorities = []
    @maintenance_priorities = []
    @construction_priorities << {:id=>1, :name=>"Nýframkvæmd 1"}
    @construction_priorities << {:id=>2, :name=>"Nýframkvæmd 2"}
    @construction_priorities << {:id=>3, :name=>"Nýframkvæmd 3"}
    @construction_priorities << {:id=>4, :name=>"Nýframkvæmd 4"}
    @construction_priorities << {:id=>5, :name=>"Nýframkvæmd 5"}

    @maintenance_priorities << {:id=>1, :name=>"Viðhaldsverkefni 1"}
    @maintenance_priorities << {:id=>2, :name=>"Viðhaldsverkefni 2"}
    @maintenance_priorities << {:id=>3, :name=>"Viðhaldsverkefni 3"}
    @maintenance_priorities << {:id=>4, :name=>"Viðhaldsverkefni 4"}
    @maintenance_priorities << {:id=>5, :name=>"Viðhaldsverkefni 5"}
  end
end