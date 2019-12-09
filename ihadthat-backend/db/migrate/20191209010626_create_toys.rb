class CreateToys < ActiveRecord::Migration[5.2]
  def change
    create_table :toys do |t|
      t.string :name
      t.string :description
      t.string :url
      t.timestamps
    end
  end
end
