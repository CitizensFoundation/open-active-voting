class Vote < ActiveRecord::Base

  scope :select_id, select("id")
  scope :unique, :select => ("DISTINCT ON (user_id_hash) *")
  scope :latest, order("created_at")

  def self.all_latest_votes_by_distinct_voters
    Vote.find_by_sql(%q{
        SELECT  id, created_at, payload_data, user_id_hash
        FROM    votes vs
        WHERE   id =
                (
                SELECT  id
                FROM    votes vsi
                WHERE   vsi.user_id_hash = vs.user_id_hash
                ORDER BY
                        created_at DESC, id DESC
                LIMIT 1
                )
        ORDER BY
                created_at ASC, id DESC

     })
  end
end
