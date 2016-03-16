class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :year_published
end
