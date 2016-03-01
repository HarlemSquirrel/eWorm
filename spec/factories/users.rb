FactoryGirl.define do
  factory :users do |f|
    #f.username: "test"
    #f.email: "test@test.com"
    #f.password: "really8Strong!"
    username 'test'
    email 'test@test.com'
    password 'Testing4realz'
  end
end
