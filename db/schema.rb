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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180330170937) do

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "resource_id",   limit: 255,   null: false
    t.string   "resource_type", limit: 255,   null: false
    t.integer  "author_id",     limit: 4
    t.string   "author_type",   limit: 255
    t.text     "body",          limit: 65535
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "namespace",     limit: 255
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_admin_notes_on_resource_type_and_resource_id", using: :btree

  create_table "admin_notes", force: :cascade do |t|
    t.string   "resource_id",     limit: 255,   null: false
    t.string   "resource_type",   limit: 255,   null: false
    t.integer  "admin_user_id",   limit: 4
    t.string   "admin_user_type", limit: 255
    t.text     "body",            limit: 65535
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "admin_notes", ["admin_user_type", "admin_user_id"], name: "index_admin_notes_on_admin_user_type_and_admin_user_id", using: :btree
  add_index "admin_notes", ["resource_type", "resource_id"], name: "index_admin_notes_on_resource_type_and_resource_id", using: :btree

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "ballots", force: :cascade do |t|
    t.binary   "areas",      limit: 65535, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "budget_ballot_area_translations", force: :cascade do |t|
    t.integer  "budget_ballot_area_id", limit: 4
    t.string   "locale",                limit: 255, null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "name",                  limit: 255
  end

  add_index "budget_ballot_area_translations", ["budget_ballot_area_id"], name: "index_budget_ballot_area_translations_on_budget_ballot_area_id", using: :btree
  add_index "budget_ballot_area_translations", ["locale"], name: "index_budget_ballot_area_translations_on_locale", using: :btree

  create_table "budget_ballot_areas", force: :cascade do |t|
    t.float    "budget_amount", limit: 24
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "budget_ballot_item_translations", force: :cascade do |t|
    t.integer  "budget_ballot_item_id", limit: 4
    t.string   "locale",                limit: 255,   null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name",                  limit: 255
    t.text     "description",           limit: 65535
  end

  add_index "budget_ballot_item_translations", ["budget_ballot_item_id"], name: "index_budget_ballot_item_translations_on_budget_ballot_item_id", using: :btree
  add_index "budget_ballot_item_translations", ["locale"], name: "index_budget_ballot_item_translations_on_locale", using: :btree

  create_table "budget_ballot_items", force: :cascade do |t|
    t.string   "idea_url",              limit: 255
    t.float    "price",                 limit: 24,  null: false
    t.integer  "idea_id",               limit: 4,   null: false
    t.integer  "budget_ballot_area_id", limit: 4,   null: false
    t.string   "locations",             limit: 255
    t.string   "image_url",             limit: 255
    t.string   "pdf_url",               limit: 255
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "config", force: :cascade do |t|
    t.string   "auth_url",                            limit: 255
    t.integer  "timeout_in_seconds",                  limit: 4,                     null: false
    t.datetime "created_at",                                                        null: false
    t.datetime "updated_at",                                                        null: false
    t.string   "saml_assertion_consumer_service_url", limit: 255
    t.string   "saml_idp_sso_target_url",             limit: 255
    t.string   "saml_idp_cert_fingerprint",           limit: 255
    t.string   "saml_name_identifier_format",         limit: 255
    t.boolean  "test_mode",                                         default: false
    t.text     "public_key",                          limit: 65535
    t.text     "known_x509_cert",                     limit: 65535
    t.text     "counting_progress",                   limit: 65535
    t.string   "election_id",                         limit: 255
    t.string   "election_name",                       limit: 255
    t.text     "election_description",                limit: 65535
    t.json     "client_config"
  end

  create_table "final_split_votes", force: :cascade do |t|
    t.integer  "area_id",                 limit: 4,     null: false
    t.text     "payload_data",            limit: 65535, null: false
    t.integer  "vote_id",                 limit: 4,     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "encrypted_vote_checksum", limit: 65535, null: false
    t.text     "generated_vote_checksum", limit: 65535, null: false
  end

  add_index "final_split_votes", ["area_id"], name: "index_final_split_votes_on_area_id", using: :btree

  create_table "saml_assertions", force: :cascade do |t|
    t.string   "assertion_id", limit: 512, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "saml_assertions", ["assertion_id"], name: "index_saml_assertions_on_assertion_id", using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "area_id",                 limit: 4,     null: false
    t.string   "user_id_hash",            limit: 255,   null: false
    t.text     "payload_data",            limit: 65535, null: false
    t.string   "client_ip_address",       limit: 255,   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "authenticated_at"
    t.string   "session_id",              limit: 255,   null: false
    t.text     "encrypted_vote_checksum", limit: 65535, null: false
    t.integer  "saml_assertion_id",       limit: 4,   null: true
    t.text     "client_user_agent",       limit: 65535
    t.string   "user_postcode",           limit: 255,   null: true
  end

  add_index "votes", ["area_id"], name: "index_votes_on_area_id", using: :btree
  add_index "votes", ["user_id_hash"], name: "index_votes_on_user_id_hash", using: :btree
  add_index "votes", ["session_id"], name: "index_votes_on_session_id", using: :btree
  add_index "votes", ["session_id","saml_assertion_id"], name: "index_votes_on_session_id_and_saml_id", using: :btree
  add_index "votes", ["saml_assertion_id"], name: "index_votes_saml_id", using: :btree
  add_index "votes", ["created_at"], name: "index_votes_created_at", using: :btree
  add_index "votes", ["user_id_hash","created_at","id"], name: "index_votes_id_hash_created_at", using: :btree
end
