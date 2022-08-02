class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :project, :description
end
