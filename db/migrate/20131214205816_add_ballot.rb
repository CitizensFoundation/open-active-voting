class AddBallot < ActiveRecord::Migration
  def up
    create_table :budget_ballot_areas do |t|
      t.float :budget_amount
      t.timestamps
    end
    BudgetBallotArea.create_translation_table! :name => :string

    create_table :budget_ballot do |t|
      t.string :letter
      t.string :link
      t.float :price
      t.integer :idea_id
      t.integer :budget_ballot_area_id
      t.timestamps
    end

    BudgetBallotItem.create_translation_table! :name => :string, :description => :text
  end

  def down
  end
end
