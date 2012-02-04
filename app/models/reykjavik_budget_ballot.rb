# coding: utf-8

class ReykjavikBudgetBallot
  attr_reader :construction_priorities
  attr_reader :maintenance_priorities

  def initialize
    @construction_priorities = []
    @maintenance_priorities = []
    count = 0
    13.times do
      @construction_priorities << { :id=>count+=1, :name=>"Nýframkvæmd #{count}", :price=>rand(20)+1 }
    end

    13.times do
      @maintenance_priorities << { :id=>count+=1, :name=>"Viðhaldsverkefni #{count}", :price=>rand(10)+1 }
    end

    @neighborhoods=Hash.new
    @neighborhoods[1] = { :name=>"Árbær", :budget_amount=>"13.534.046" }
    @neighborhoods[2] = { :name=>"Breiðholt", :budget_amount=>"23.209.940" }
    @neighborhoods[3] = { :name=>"Grafarholt og Úlfarsárdalur", :budget_amount=>"9.083.648" }
    @neighborhoods[4] = { :name=>"Grafarvogur", :budget_amount=>"20.768.909" }
    @neighborhoods[5] = { :name=>"Háaleiti og Bústaðir", :budget_amount=>"16.983.556" }
    @neighborhoods[6] = { :name=>"Hlíðar", :budget_amount=>"12.905.052" }
    @neighborhoods[7] = { :name=>"Kjalarnes", :budget_amount=>"4.543.122" }
    @neighborhoods[8] = { :name=>"Laugardalur", :budget_amount=>"18.308.904" }
    @neighborhoods[9] = { :name=>"Miðborg", :budget_amount=>"12.019.905" }
    @neighborhoods[10] ={ :name=>"Vesturbær", :budget_amount=>"18.640.952" }
    @neighborhoods[99] = { :name=>"PRUFU HVERFI", :budget_amount=>"20.000.000" }
  end

  def get_neighborhood_budget(neighborhood_id)
    Rails.logger.debug("The id: #{neighborhood_id} #{@neighborhoods.inspect} XXXX #{@neighborhoods[neighborhood_id]}")
    @neighborhoods[neighborhood_id][:budget_amount].gsub(".","").to_f/"1.000.000".gsub(".","").to_f
  end

  def get_neighborhood_name(id)
    @neighborhoods[id][:name]
  end
end
