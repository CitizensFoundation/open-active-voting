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

    @construction_priorities << { :id=>count+=1, :name=>"Ímyndað verkefni", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Þetta verkefni er ekki til", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Hugmynd sem kemur til greina", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Verkefni um eyðingu veggjatítlna", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Verkefni sem verður kannski framkvæmt", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Þessi hugmynd er kannski góð", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Verkefni sem bætir geð", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Þetta er hugmynd um betra líf", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Hugmynd sem ekki er til", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Engin hugmynd um ekkert verkefni", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Verkefni sem virkar, kannski", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Hugmynd fyrir okkur öll sem gæti gengið", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }
    @construction_priorities << { :id=>count+=1, :name=>"Lokaverkefni fyrir leikskóla", :price=>[(budget/7)+count/(2.0-(count/10)),budget].min.round(1) }

    count2 = 1
    @maintenance_priorities << { :id=>count+=1, :name=>"Engin hugmynd um ekkert verkefni", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Þessi hugmynd er kannski góð", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Verkefni sem virkar, kannski", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Hugmynd sem kemur til greina", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Þetta verkefni er ekki til", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Verkefnið sem verður kannski framkvæmt en hugsanlega aldrei", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Ímyndað verkefni", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Verkefni sem bætir geð", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Verkefni um eyðingu veggjatítlna", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Hugmynd sem ekki er til", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Hugmynd fyrir okkur öll sem gæti gengið", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Lokaverkefni fyrir leikskóla", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
    @maintenance_priorities << { :id=>count+=1, :name=>"Þetta er hugmynd um betra líf", :price=>[(budget/7)+(count2+=1)/(2.0-(count2/10)),budget].min.round(1) }
  end
end