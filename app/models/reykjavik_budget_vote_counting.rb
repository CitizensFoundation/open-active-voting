class ReykjavikBudgetVoteCounting
  @construction_priority_ids_count = Hash.new
  @maintenance_priority_ids_count = Hash.new

  def count_all_votes
    Vote.find(:all,:select=>"DISTINCT(user_id_hash)", :order=>"created_at").each do |vote|
      process_vote(vote)
    end
    write_voting_results_report
    write_audit_report
  end

  private

  def process_vote(vote)
    decrypted_vote = ReykjavikBudgetVote.new(private_key_file,vote)
    add_construction_votes(decrypted_vote.construction_priority_ids)
    add_maintenance_votes(decrypted_vote.maintenance_priority_ids)
  end

  def add_construction_votes(priority_ids)
    priority_ids.each do |priority_id|
      @construction_priority_ids_count[priority_id] = 0 unless @construction_priority_ids_count[priority_id]
      @construction_priority_ids_count[priority_id] += 1
    end
  end

  def add_maintenance_votes(priority_ids)
    priority_ids.each do |priority_id|
      @maintenance_priority_ids_count[priority_id] = 0 unless @maintenance_priority_ids_count[priority_id]
      @maintenance_priority_ids_count[priority_id] += 1
    end
  end

  def write_voting_results_report
    CSV.generate do |csv|
      csv << "Niðurstöður fyrir Nýframkvæmdir"
      csv << ""
      @construction_priority_ids_count.sort {|id,vote_count| vote_count <=> vote_count }.each do |priority_id,vote_count|
        csv << "#{priority_id},#{vote_count}"
      end
      csv << ""
      csv << "Niðurstöður fyrir Viðhaldsverkefni"
      csv << ""
      @maintenance_priority_ids_count.sort {|id,vote_count| vote_count <=> vote_count }.each do |priority_id,vote_count|
        csv << "#{priority_id},#{vote_count}"
      end
      File.open("results/voting_results.csv").write(csv)
    end
  end

  def write_audit_report
    CSV.generate do |csv|
      csv << "Audit report"
      csv << ""
      csv << "Dulkóðuð kennitala,dagsetting,ip tala"
      Vote.find(:all, :order=>"user_id_hash").each do |vote|
        csv << "#{vote.user_id_hash},#{vote.created_at},#{vote.client_ip_address}"
      end
      File.open("results/audit_report.csv").write(csv)
    end
  end
end