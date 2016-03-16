class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :year_published, :rating_avg
  has_one :author
  has_one :genre
  has_many :reviews
end
