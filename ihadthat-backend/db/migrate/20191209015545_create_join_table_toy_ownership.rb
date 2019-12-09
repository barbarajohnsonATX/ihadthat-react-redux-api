class CreateJoinTableToyOwnership < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :toys do |t|
      # t.index [:user_id, :toy_id]
      # t.index [:toy_id, :user_id]
    end
  end
end
