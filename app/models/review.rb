class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :book

  validates :rating, inclusion: 1..5
  validates :content, :book_id, :user_id, :rating, presence: true
end
