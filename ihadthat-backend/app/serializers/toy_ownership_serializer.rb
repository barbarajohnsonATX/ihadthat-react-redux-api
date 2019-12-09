class ToyOwnershipSerializer < ActiveModel::Serializer
  attributes :id, :toy_id, :user_id
end
