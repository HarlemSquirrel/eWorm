class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :year_published
  has_one :author
  has_one :genre
end
