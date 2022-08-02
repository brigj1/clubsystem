class AddLeaderToClubs < ActiveRecord::Migration[6.1]
  def change
    add_column :clubs, :leader, :bigint
    add_index :clubs, :leader

    add_foreign_key :clubs, :users, column: :leader, on_delete: :nullify
  end
end
