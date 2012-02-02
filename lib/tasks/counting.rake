namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    count  = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
    count.count_all_votes
  end
end