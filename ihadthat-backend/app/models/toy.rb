class Toy < ApplicationRecord
    has_many :toy_ownerships, dependent: :destroy
    has_many :users, through: :toy_ownerships
end
