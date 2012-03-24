namespace :counting do
  desc "Count all votes"
  task(:count => :environment) do
    raise "Missing private_key parameters" unless ENV['private_key']
    Dir.mkdir("results") unless File.exists?("results")
    puts "Starting vote counting"
    puts "Splitting user id hash and vote and generating final votes database tables"
    Vote.split_and_generate_final_votes!
    ReykjavikBudgetBallot.new.neighborhoods.each do |i,neighborhood|
      puts "Counting votes for neighborhood: #{neighborhood[:name]}"
      count  = ReykjavikBudgetVoteCounting.new(ENV['private_key'])
      count.count_unique_votes(neighborhood[:id])
      puts "Writing unencrypted audit report"
      count.write_counted_unencrypted_audit_report
    end
  end
end