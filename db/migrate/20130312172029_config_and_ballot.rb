class ConfigAndBallot < ActiveRecord::Migration
  def up
    create_table :ballots do |t|
      t.binary :areas, :null=>false
      t.timestamps
    end

    create_table :config do |t|
      t.string :rsk_url, :null=>false
      t.integer :timeout_in_seconds, :null=>false
      t.timestamps
    end
  end

  def down
  end
end
