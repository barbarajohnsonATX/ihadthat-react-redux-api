class Toy < ApplicationRecord
    has_many :toy_ownerships
    has_many :users, through: :toy_ownerships
end
