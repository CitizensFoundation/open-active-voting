require 'openssl'
require 'base64'

# Copyright (C) 2010-2016 Íbúar ses / Citizens Foundation Iceland
# Authors Robert Bjarnason, Gunnar Grimsson & Gudny Maren Valsdottir
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

class BudgetVoteHelper
  NEW_PRIORITIES_ARRAY_ID = 0

  attr_reader :idea_ids, :vote

  @@private_key_file_data = nil
  @@private_key = nil

  def initialize(encrypted_payload, private_key_file, vote)
    @idea_ids = []
    @encrypted_payload = encrypted_payload
    @@private_key_file_data = File.read(private_key_file) unless @@private_key_file_data
    @@private_key = OpenSSL::PKey::RSA.new(@@private_key_file_data,nil) unless @@private_key
    @vote = vote
  end

  def unencryped_vote_for_audit_csv
    # Decrypt the vote for the audit csv
    unpack
    (@idea_ids)
  end

  def pack(public_key_file,idea_ids)
    # Encrypt the vote, for testing purposes only
    public_key = OpenSSL::PKey::RSA.new(File.read(public_key_file))
    ideas = idea_ids.to_json
    @encrypted_payload = Base64.encode64(public_key.public_encrypt(combined_ideas.to_json))
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
    ideas = JSON.parse(decrypted_vote).to_a
    #puts "Last vote for #{combined_ideas}"
    @idea_ids = ideas
    #puts "@idea_ids #{@idea_ids}"
  end

  def unpack_without_encryption
    # Unpack the vote without decryption
    ideas = @encrypted_payload
    if ideas
      @idea_ids = ideas
    end
  end
end