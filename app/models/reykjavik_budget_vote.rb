require 'openssl'
require 'base64'

# Copyright (C) 2010,2011,2012 Íbúar ses
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

class ReykjavikBudgetVote
  NEW_PRIORITIES_ARRAY_ID = 0

  attr_reader :priority_ids

  @@private_key_file_data = nil
  @@private_key = nil

  def initialize(encrypted_payload, private_key_file, vote)
    @priority_ids = []
    @encrypted_payload = encrypted_payload
    @@private_key_file_data = File.read(private_key_file) unless @@private_key_file_data
    @@private_key = OpenSSL::PKey::RSA.new(@@private_key_file_data,nil) unless @@private_key
    @vote = vote
  end

  def unencryped_vote_for_audit_csv
    # Decrypt the vote for the audit csv
    unpack
    (@priority_ids)
  end

  def pack(public_key_file,priority_ids)
    # Encrypt the vote, for testing purposes only
    public_key = OpenSSL::PKey::RSA.new(File.read(public_key_file))
    priorities = priority_ids.to_json
    @encrypted_payload = Base64.encode64(public_key.public_encrypt(combined_priorities.to_json))
  end

  def unpack
    # Check the encrypted checksum
    #puts "Encrypted checksum: #{@vote.encrypted_vote_checksum}"
    decrypted_vote_checksum = @@private_key.private_decrypt(Base64.decode64(@vote.encrypted_vote_checksum))
    generated_vote_checksum = @@private_key.private_decrypt(Base64.decode64(@vote.generated_vote_checksum))
    raise "Vote checksum does not match #{decrypted_vote_checksum} != #{generated_vote_checksum}" unless decrypted_vote_checksum==generated_vote_checksum

    # Decrypt the vote
    decrypted_vote = Base64.decode64(@@private_key.private_decrypt(Base64.decode64(@encrypted_payload)))
    #Rails.logger.info("#{ap @vote}")
    decrypted_vote = decrypted_vote.gsub(",]","]")
    priorities = JSON.parse(decrypted_vote).to_a
    #puts "Last vote for #{combined_priorities}"
    @priority_ids = priorities
    puts "@priority_ids #{@priority_ids}"
  end

  def unpack_without_encryption
    # Unpack the vote without decryption
    priorities = @encrypted_payload
    if priorities
      @priority_ids = priorities
    end
  end
end