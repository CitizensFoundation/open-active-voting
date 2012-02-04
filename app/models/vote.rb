class Vote < ActiveRecord::Base

  scope :select_id, select("id")
  scope :unique, :select => ("DISTINCT ON (user_id_hash) *")
  scope :latest, order("created_at")

  def self.all_latest_votes_by_distinct_voters(neighborhood_id)
    query = %q{
        SELECT  id, created_at, payload_data, user_id_hash
        FROM    votes vs
        WHERE   id =
                  (
                    SELECT  id
                    FROM    votes other_votes
                    WHERE   other_votes.user_id_hash = vs.user_id_hash AND other_votes.neighborhood_id = vs.neighborhood_id
                    ORDER BY
                            created_at DESC
                    LIMIT 1
                  )}

    query += "AND neighborhood_id = #{neighborhood_id} ORDER BY created_at DESC"
    Vote.find_by_sql(query)
  end
end
