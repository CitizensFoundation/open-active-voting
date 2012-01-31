namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    count  = ReykjavikBudgetVoteCounting.new
    count.count_all_votes(Rails.root.join('test','keys','privkey.pem'))
  end
end