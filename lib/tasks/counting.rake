namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    ReykjavikBudgetBallot.new.neighborhoods.each do |neighborhood|
      count  = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
      count.count_unique_votes(neighborhood[:id])
    end
  end
end