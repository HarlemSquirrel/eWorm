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
    name: Faker::Book.genre
  )
end

25.times do
  Book.create(
    title: Faker::Book.title,
    author: Author.all[rand(Author.all.count)],
    genre: Genre.all[rand(Genre.all.count)],
    year_published: Date.today.year - rand(300)
  )
end

10.times do
  User.create(
  username: Faker::Name.name,
  email: Faker::Internet.email,
  password:"superSecurez"
  )
end

User.create(
  username: "the_tester",
  email: "test@test.net",
  password:"testwecan"
)

45.times do
  Review.create(
    content: Faker::Lorem.paragraph,
    book: Book.all[rand(Book.all.count)],
    user: User.all[rand(User.all.count)],
    rating: rand(4)+1
  )
end
