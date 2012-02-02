namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    count  = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    count.count_unique_votes
  end
end