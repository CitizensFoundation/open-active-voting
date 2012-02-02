class Vote < ActiveRecord::Base

  scope :select_id, select("id")
  scope :unique, :select => ("DISTINCT ON (user_id_hash) *")
  scope :latest, order("created_at")
end
