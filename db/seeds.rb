# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

4.times do
  Author.create(
    name: Faker::Name.name
  )
end

4.times do
  Genre.create(
    name: Faker::Name.name
  )
end

6.times do
  Book.create(
    title: Faker::Book.title,
    author: Author.all[rand(Author.all.count)],
    genre: Genre.all[rand(Genre.all.count)]
  )
end

User.create(
  username: "the_tester",
  email: "test@test.com",
  password:"yeswecan"
)
