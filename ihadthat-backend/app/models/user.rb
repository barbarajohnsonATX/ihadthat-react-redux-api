class User < ApplicationRecord
    has_secure_password
    has_many :toy_ownerships
    has_many :toys, through: :toy_ownerships
end
