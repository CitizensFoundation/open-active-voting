namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    Vote.split_and_generate_final_votes!
    ReykjavikBudgetBallot.new.neighborhoods.each do |neighborhood|
      count  = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
      count.count_unique_votes(neighborhood[:id])
      count.write_counted_unencrypted_audit_report
    end
  end
end