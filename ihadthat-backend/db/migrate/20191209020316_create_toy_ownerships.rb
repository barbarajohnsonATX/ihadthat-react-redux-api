class CreateToyOwnerships < ActiveRecord::Migration[5.2]
  def change
    create_table :toy_ownerships do |t|
      t.integer :toy_id
      t.integer :user_id

      t.timestamps
    end
  end
end
