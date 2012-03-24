require "rubygems"
require "test/unit"
require 'test_helper'

class VotesTestEncryption < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "encryption" do
    public_key = OpenSSL::PKey::RSA.new(File.read(Rails.root.join("config","rvk_public_key.pem")))
    private_key = OpenSSL::PKey::RSA.new(File.read(Rails.root.join('test','keys','privkey.pem')),"Robert12345.")

    puts vote_checksum = "sdf9ew9fefjewfjewh89hf948"
    puts encrypted = Base64.encode64(public_key.public_encrypt(vote_checksum))
    puts decrypted_vote_checksum = private_key.private_decrypt(Base64.decode64(encrypted))

    assert vote_checksum==decrypted_vote_checksum
  end
end