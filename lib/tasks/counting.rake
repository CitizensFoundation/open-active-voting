namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    puts "Starting vote counting"
    puts "Splitting user id hash and vote and generating final votes database tables"
    Vote.split_and_generate_final_votes!
    ReykjavikBudgetBallot.new.neighborhoods.each do |i,neighborhood|
      puts "Counting votes for neighborhood id: #{neighborhood}"
      count  = ReykjavikBudgetVoteCounting.new(Rails.root.join('test','keys','privkey.pem'))
      count.count_unique_votes(neighborhood[:id])
      puts "Writing unencrypted audit report"
      count.write_counted_unencrypted_audit_report
    end
  end
end