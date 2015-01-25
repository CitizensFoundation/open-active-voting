class AddSamlAssertion < ActiveRecord::Migration
  def up
    create_table :saml_assertions do |t|
      t.string :assertion_id, :null=>false
      t.timestamps
    end

    add_index :saml_assertions, :assertion_id
  end

  def down
  end
end
