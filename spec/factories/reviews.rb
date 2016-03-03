FactoryGirl.define do
  factory :review do |f|
    content 'The best book ever!'
    user_id 1
    book_id 1
    rating 5
  end
end
