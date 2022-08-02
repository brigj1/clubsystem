class CreateClubs < ActiveRecord::Migration[6.1]
  def change
    create_table :clubs do |t|
      t.string :name
      t.string :subject
      t.string :project
      t.string :description

      t.timestamps
    end
  end
end
