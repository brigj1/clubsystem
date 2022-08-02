class Club < ApplicationRecord
    has_many :club_members
    has_many :users, through: :club_members
end
