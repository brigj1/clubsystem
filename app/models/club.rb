class Club < ApplicationRecord
    belongs_to :user  # via leader - watch out for correctness...

    has_many :club_members

    # note that we are calling the users "members", not "users"
    has_many :members, through: :club_members, source: :user

    #has_one :leader
end
