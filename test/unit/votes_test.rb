# Copyright (C) 2010-2013 Íbúar ses
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

require "rubygems"
require "test/unit"
require 'test_helper'

class VotesTestEncryption < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "encryption" do
    public_key = OpenSSL::PKey::RSA.new(File.read(Rails.root.join("config","public_key.pem")))
    private_key = OpenSSL::PKey::RSA.new(File.read(Rails.root.join('test','keys','privkey.pem')),"kjosa.123")

    puts vote_checksum = "sdf9ew9fefjewfjewh89hf948"
    puts encrypted = Base64.encode64(public_key.public_encrypt(vote_checksum))
    puts decrypted_vote_checksum = private_key.private_decrypt(Base64.decode64(encrypted))

    assert vote_checksum==decrypted_vote_checksum
  end
end
