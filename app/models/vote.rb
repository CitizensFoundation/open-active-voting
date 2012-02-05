class Vote < ActiveRecord::Base

  def self.split_and_generate_final_votes!
    FinalSplitVote.delete_all
    Vote.all_latest_votes_by_distinct_voters.each do |vote|
      FinalSplitVote.create(:neighborhood_id=>vote.neighborhood_id, :vote_id=>vote.id, :payload_data=>vote.payload_data)
    end
  end

  def self.all_latest_votes_by_distinct_voters
    query = %q{
        SELECT  id, created_at, neighborhood_id, payload_data, user_id_hash
        FROM    votes vs
        WHERE   id =
                  (
                    SELECT  id
                    FROM    votes other_votes
                    WHERE   other_votes.user_id_hash = vs.user_id_hash
                    ORDER BY
                            created_at DESC
                    LIMIT 1
                  )}

    query += " ORDER BY created_at DESC"
    Vote.find_by_sql(query)
  end
end
