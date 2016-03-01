class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :genre
  has_many :reviews

  def rating_avg
    return 0 if self.reviews.empty?
    (self.reviews.collect {|r| r.rating}.inject(:+)) / self.reviews.count
  end
end
