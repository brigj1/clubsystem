class User < ApplicationRecord
    has_many :club_members
    has_many :clubs, through: :club_members

    has_many :leaders, class_name: "Club"

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
