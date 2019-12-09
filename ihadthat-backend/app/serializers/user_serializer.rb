class UserSerializer < ActiveModel::Serializer
  has_many :toys

  attributes :id, :username, :email, :created_at, :updated_at
end
