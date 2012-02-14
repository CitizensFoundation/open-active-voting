# coding: utf-8
class ReykjavikBudgetBallot
  attr_reader :construction_priorities
  attr_reader :maintenance_priorities
  attr_reader :neighborhoods

  def initialize(neighborhood_id=1)
    # Setup the neighborhoods for the ballot
    @neighborhoods=Hash.new
    @neighborhoods[1] = { :id=>1 ,:name=>"Árbær",                       :budget_amount=>"13.534.046" }
    @neighborhoods[2] = { :id=>2 ,:name=>"Breiðholt",                   :budget_amount=>"23.209.940" }
    @neighborhoods[3] = { :id=>3 ,:name=>"Grafarholt og Úlfarsárdalur", :budget_amount=>"9.083.648" }
    @neighborhoods[4] = { :id=>4 ,:name=>"Grafarvogur",                 :budget_amount=>"20.768.909" }
    @neighborhoods[5] = { :id=>5 ,:name=>"Háaleiti og Bústaðir",        :budget_amount=>"16.983.556" }
    @neighborhoods[6] = { :id=>6 ,:name=>"Hlíðar",                      :budget_amount=>"12.905.052" }
    @neighborhoods[7] = { :id=>7 ,:name=>"Kjalarnes",                   :budget_amount=>"4.543.122" }
    @neighborhoods[8] = { :id=>8 ,:name=>"Laugardalur",                 :budget_amount=>"18.308.904" }
    @neighborhoods[9] = { :id=>9 ,:name=>"Miðborg",                     :budget_amount=>"12.019.905" }
    @neighborhoods[10] ={ :id=>10,:name=>"Vesturbær",                   :budget_amount=>"18.640.952" }

    # For testing purposes
    setup_test_priorities_by_neighborhood_id(neighborhood_id)
  end

  def get_neighborhood_budget(neighborhood_id)
    # Get the given neighborhood budget
    Rails.logger.debug("The id: #{neighborhood_id} #{@neighborhoods.inspect} XXXX #{@neighborhoods[neighborhood_id]}")
    @neighborhoods[neighborhood_id][:budget_amount].gsub(".","").to_f/"1.000.000".gsub(".","").to_f
  end

  def get_neighborhood_name(neighborhood_id)
    # Get the given neighborhood budget
    @neighborhoods[neighborhood_id][:name]
  end

  def get_priority_name(priority_id)
    # Get the given priority name
    name = nil
    all = @construction_priorities+@maintenance_priorities
    all.each do |p|
      if p[:id]==priority_id
        name = p[:name]
        break
      end
    end
    name
  end

  def get_priority_price(priority_id)
    # Get the given priority price
    name = nil
    all = @construction_priorities+@maintenance_priorities
    all.each do |p|
      if p[:id]==priority_id
        name = p[:price]
        break
      end
    end
    name
  end

  def setup_test_priorities_by_neighborhood_id(neighborhood_id)
    # For testing purposes
    budget = get_neighborhood_budget(neighborhood_id)
    @construction_priorities = []
    @maintenance_priorities = []
    count = 0
    13.times do
      @construction_priorities << { :id=>count+=1, :name=>"Nýframkvæmd #{count}", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    end

    count2 = 1
    13.times do
      @maintenance_priorities << { :id=>count+=1, :name=>"Viðhaldsverkefni #{count}", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    end
  end
end