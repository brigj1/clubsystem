class ClubMemberSerializer < ActiveModel::Serializer
  attributes :id
  has_one :club
  has_one :user
end
