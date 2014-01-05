class ChangeBallotTableName < ActiveRecord::Migration
  def up
    rename_table :budget_ballot, :budget_ballots
  end

  def down
  end
end
