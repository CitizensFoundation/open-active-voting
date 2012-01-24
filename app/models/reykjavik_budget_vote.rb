require 'openssl'
require 'base64'

class ReykjavikBudgetVote
  @@private_key_file_data = nil
  @@private_key = nil
  CONSTRUCTION_PRIORITIES_ARRAY_ID = 0
  MAINTENANCE_PRIORITIES_ARRAY_ID = 1
  @construction_priority_ids = []
  @maintenance_priority_ids = []
  @encrypted_payload = nil

  def pack(public_key_file,construction_priority_ids,maintenance_priority_ids)
    public_key = OpenSSL::PKey::RSA.new(File.read(public_key_file))
    combined_priorities = [construction_priority_ids,maintenance_priority_ids].to_json
    @encrypted_payload = Base64.encode64(public_key.public_encrypt(combined_priorities.to_json))
  end

  def unpack(private_key_file)
    @@private_key_file_data = File.read(private_key_file) unless @@private_key_file_data
    @@private_key = OpenSSL::PKey::RSA.new(@@private_key_file_data,nil) unless @@private_key
    combined_priorities = JSON.parse(private_key.private_decrypt(Base64.decode64(@encrypted_payload))).to_a
    @construction_priority_ids = combined_priorities[CONSTRUCTION_PRIORITIES_ARRAY_ID]
    @maintenance_priority_ids = combined_priorities[MAINTENANCE_PRIORITIES_ARRAY_ID]
  end
end