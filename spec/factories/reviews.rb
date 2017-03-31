FactoryGirl.define do
  factory :review do |f|
    content 'The best book ever!'
    user
    book
    rating 5
  end
end
