class Author < ActiveRecord::Base
  has_many :books
  has_many :reviews, through: :books
  has_many :genres, through: :books

  validates :name, length: {minimum: 2}

  def rating_avg
    return "no reviews...yet" if self.reviews.empty?
    ((self.reviews.collect {|r| r.rating}.inject(:+)) / self.reviews.count.to_f).round(1)
  end
end
