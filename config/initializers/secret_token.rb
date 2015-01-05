# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# example token: a8ff62b5384ee97f508bed9742742430d16e9cae1f258aa3ec188a81d687b09b94ba3b2bfdf062851761f6c3b596906838fa950cf52c338396c8d5549b10448a

if ENV['RAILS_SECRET_TOKEN']
  OpenActiveVoting::Application.config.secret_token = ENV['RAILS_SECRET_TOKEN']
else
 OpenActiveVoting::Application.config.secret_token = "82d58d3dfb91238b495a311eb8539edf5064784f1d58994679db8363ec241c745bef0b446bfe44d66cbf91a2f4e497d8f6b1ef1656e3f405b0d263a9617ac75e"
end
