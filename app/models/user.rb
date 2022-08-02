class User < ApplicationRecord
    has_many :club_members
    has_many :clubs, through: :club_members
end
