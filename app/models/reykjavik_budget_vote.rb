require 'openssl'
require 'base64'

class ReykjavikBudgetVote
  CONSTRUCTION_PRIORITIES_ARRAY_ID = 0
  MAINTENANCE_PRIORITIES_ARRAY_ID = 1

  attr_reader :construction_priority_ids
  attr_reader :maintenance_priority_ids

  @@private_key_file_data = nil
  @@private_key = nil

  def initialize(encrypted_payload, private_key_file)
    @construction_priority_ids = []
    @maintenance_priority_ids = []
    @encrypted_payload = encrypted_payload
    @@private_key_file_data = File.read(private_key_file) unless @@private_key_file_data
    @@private_key = OpenSSL::PKey::RSA.new(@@private_key_file_data,nil) unless @@private_key
  end

  def pack(public_key_file,construction_priority_ids,maintenance_priority_ids)
    public_key = OpenSSL::PKey::RSA.new(File.read(public_key_file))
    combined_priorities = [construction_priority_ids,maintenance_priority_ids].to_json
    @encrypted_payload = Base64.encode64(public_key.public_encrypt(combined_priorities.to_json))
  end

  def unpack
    puts decrypted_vote = Base64.decode64(@@private_key.private_decrypt(Base64.decode64(@encrypted_payload)))
    decrypted_vote = decrypted_vote.gsub(",]","]")
    combined_priorities = JSON.parse(decrypted_vote).to_a
    puts "Last vote for #{combined_priorities}"
    @construction_priority_ids = combined_priorities[CONSTRUCTION_PRIORITIES_ARRAY_ID]
    @maintenance_priority_ids = combined_priorities[MAINTENANCE_PRIORITIES_ARRAY_ID]
  end

  def unpack_without_encryption
    combined_priorities = @encrypted_payload
    if combined_priorities
      @construction_priority_ids = combined_priorities[CONSTRUCTION_PRIORITIES_ARRAY_ID]
      @maintenance_priority_ids = combined_priorities[MAINTENANCE_PRIORITIES_ARRAY_ID]
    end
  end
end