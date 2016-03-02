class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :genre
  has_many :reviews

  validates :title, :author_id, :genre_id, presence: true
  validates :title, uniqueness: true

  def rating_avg
    return "no reviews...yet" if self.reviews.empty?
    ((self.reviews.collect {|r| r.rating}.inject(:+)) / self.reviews.count.to_f).round(1)
  end
end
