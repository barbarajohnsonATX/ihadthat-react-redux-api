class User < ApplicationRecord
    has_secure_password
    has_many :toy_ownerships, dependent: :destroy
    has_many :toys, through: :toy_ownerships
end
