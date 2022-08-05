class ChangeForeignKeyOnClubsTable < ActiveRecord::Migration[6.1]
  def change
     remove_foreign_key :clubs, column: :leader
     add_foreign_key :clubs, :users, column: :leader, on_delete: :restrict
  end
end
