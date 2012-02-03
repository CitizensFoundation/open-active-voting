# coding: utf-8

class ReykjavikBudgetBallot
  attr_reader :construction_priorities
  attr_reader :maintenance_priorities

  def initialize
    @construction_priorities = []
    @maintenance_priorities = []
    count = 0
    13.times do
      @construction_priorities << {:id=>count+=1, :name=>"Nýframkvæmd #{count}", :price=>rand(20)+1}
    end

    13.times do
      @maintenance_priorities << {:id=>count+=1, :name=>"Viðhaldsverkefni #{count}", :price=>rand(10)+1}
    end
  end
end