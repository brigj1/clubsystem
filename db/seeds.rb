# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Faker: https://github.com/faker-ruby/faker/blob/master/doc/default/internet.md

u1 = User.create(username: 't1',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    age: rand(18..96),
    bio: Faker::Lorem.sentence
)

u2 = User.create(username: 't2',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    age: rand(18..96),
    bio: Faker::Lorem.sentence
)

u3 = User.create(username: 't3',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    age: rand(18..96),
    bio: Faker::Lorem.sentence
)    

u4 = User.create(username: 't4',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    age: rand(18..96),
    bio: Faker::Lorem.sentence
)    

c1 = Club.create(name: 'Club1', subject: "beautification", leader: u1.id, description: "clean up trash in the neighborhood")
c2 = Club.create(name: 'Club2', subject: "basketball", leader: u2.id, description: "stars in the making!")

cm1 = ClubMember.create(club_id: c1.id, user_id: u1.id)
cm2 = ClubMember.create(club_id: c1.id, user_id: u2.id)

cm3 = ClubMember.create(club_id: c2.id, user_id: u2.id)
cm4 = ClubMember.create(club_id: c2.id, user_id: u3.id)
cm5 = ClubMember.create(club_id: c2.id, user_id: u4.id)
