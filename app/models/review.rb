class Review < ActiveRecord::Base
  belongs_to :user, counter_cache: true
  belongs_to :book

  validates :rating, inclusion: 1..5
  validates :content, :book_id, :user_id, :rating, presence: true
  validates :book_id, uniqueness: { scope: :user_id }

end
