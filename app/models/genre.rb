class Genre < ActiveRecord::Base
  has_many :books
  has_many :authors, through: :books
  has_many :reviews, through: :books

  def rating_avg
    return nil if self.reviews.empty?
    ((self.reviews.collect {|r| r.rating}.inject(:+)) / self.reviews.count.to_f).round(1)
  end
end
