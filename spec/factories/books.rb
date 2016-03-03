FactoryGirl.define do
  factory :book do |f|
    title 'The Test Book'
    author_id 1
    genre_id 1
    year_published 1999
  end
end
