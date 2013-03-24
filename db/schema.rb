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

ActiveRecord::Schema.define(:version => 20130324212609) do

  create_table "ballots", :force => true do |t|
    t.binary   "neighborhoods", :null => false
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "config", :force => true do |t|
    t.string   "rsk_url",            :null => false
    t.integer  "timeout_in_seconds", :null => false
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "rsk_soap_username"
    t.string   "rsk_soap_password"
  end

  create_table "final_split_votes", :force => true do |t|
    t.integer  "neighborhood_id",         :null => false
    t.text     "payload_data",            :null => false
    t.integer  "vote_id",                 :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "encrypted_vote_checksum", :null => false
    t.text     "generated_vote_checksum", :null => false
  end

  add_index "final_split_votes", ["neighborhood_id"], :name => "index_final_split_votes_on_neighborhood_id"

  create_table "votes", :force => true do |t|
    t.integer  "neighborhood_id",         :null => false
    t.string   "user_id_hash",            :null => false
    t.text     "payload_data",            :null => false
    t.string   "client_ip_address",       :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_id",              :null => false
    t.text     "encrypted_vote_checksum", :null => false
  end

  add_index "votes", ["neighborhood_id"], :name => "index_votes_on_neighborhood_id"
  add_index "votes", ["user_id_hash"], :name => "index_votes_on_user_id_hash"

end
