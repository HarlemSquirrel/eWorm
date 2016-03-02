class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :genre
  has_many :reviews

  def rating_avg
    return nil if self.reviews.empty?
    (self.reviews.collect {|r| r.rating}.inject(:+)) / self.reviews.count.to_f
  end
end
