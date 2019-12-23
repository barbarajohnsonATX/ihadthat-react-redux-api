class ToyOwnershipSerializer < ActiveModel::Serializer
  belongs_to :user 
  belongs_to :toy
  attributes :id, :toy_id, :user_id
end
