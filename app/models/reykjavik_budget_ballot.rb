# coding: utf-8

class ReykjavikBudgetBallot
  attr_reader :construction_priorities
  attr_reader :maintenance_priorities

  def initialize
    @construction_priorities = []
    @maintenance_priorities = []
    count = 0
    13.times do
      @construction_priorities << {:id=>count+=1, :name=>"Nýframkvæmd #{count}"}
    end

    13.times do
      @maintenance_priorities << {:id=>count+=1, :name=>"Viðhaldsverkefni #{count}"}
    end
  end
end