class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :project, :description, :leader

  private

  def get_leader_name
  end

  # need to get user.first_name and user.last_name for the leader
  def leader
    byebug


  end

end
