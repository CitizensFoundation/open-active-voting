# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140105165517) do

  create_table "ballots", :force => true do |t|
    t.binary   "areas",      :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "budget_ballot_area_translations", :force => true do |t|
    t.integer  "budget_ballot_area_id"
    t.string   "locale",                :null => false
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
    t.string   "name"
  end

  add_index "budget_ballot_area_translations", ["budget_ballot_area_id"], :name => "index_budget_ballot_area_translations_on_budget_ballot_area_id"
  add_index "budget_ballot_area_translations", ["locale"], :name => "index_budget_ballot_area_translations_on_locale"

  create_table "budget_ballot_areas", :force => true do |t|
    t.float    "budget_amount"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "budget_ballot_translations", :force => true do |t|
    t.integer  "budget_ballot_id"
    t.string   "locale",           :null => false
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "name"
    t.text     "description"
  end

  add_index "budget_ballot_translations", ["budget_ballot_id"], :name => "index_budget_ballot_translations_on_budget_ballot_id"
  add_index "budget_ballot_translations", ["locale"], :name => "index_budget_ballot_translations_on_locale"

  create_table "budget_ballots", :force => true do |t|
    t.string   "letter"
    t.string   "link"
    t.float    "price"
    t.integer  "idea_id"
    t.integer  "budget_ballot_area_id"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
  end

  create_table "config", :force => true do |t|
    t.string   "rsk_url",                             :null => false
    t.integer  "timeout_in_seconds",                  :null => false
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
    t.string   "rsk_soap_username"
    t.string   "rsk_soap_password"
    t.string   "election_id"
    t.string   "saml_assertion_consumer_service_url"
    t.string   "saml_idp_sso_target_url"
    t.string   "saml_idp_cert_fingerprint"
    t.string   "saml_name_identifier_format"
    t.string   "rsk_svf_nr"
  end

  create_table "final_split_votes", :force => true do |t|
    t.integer  "area_id",                 :null => false
    t.text     "payload_data",            :null => false
    t.integer  "vote_id",                 :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "encrypted_vote_checksum", :null => false
    t.text     "generated_vote_checksum", :null => false
  end

  add_index "final_split_votes", ["area_id"], :name => "index_final_split_votes_on_area_id"

  create_table "votes", :force => true do |t|
    t.integer  "area_id",                 :null => false
    t.string   "user_id_hash",            :null => false
    t.text     "payload_data",            :null => false
    t.string   "client_ip_address",       :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_id",              :null => false
    t.text     "encrypted_vote_checksum", :null => false
  end

  add_index "votes", ["area_id"], :name => "index_votes_on_area_id"
  add_index "votes", ["user_id_hash"], :name => "index_votes_on_user_id_hash"

end
