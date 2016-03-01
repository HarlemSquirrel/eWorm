require 'rails_helper'

RSpec.describe Genre, type: :model do
  describe 'attributes' do
    it { should respond_to(:name) }
  end

  describe 'association' do
    it { should have_many(:books) }
    it { should have_many(:authors).through(:books) }
    it { should have_many(:reviews).through(:books) }
  end

  describe '#rating_avg' do
    genre = Genre.create(name: "Pulpy Fiction")

    it 'returns nil when there are no reviews' do
      expect(genre.rating_avg).to eq(nil)
    end

    it 'knows the rating average' do
      book = Book.create(title: "The World is Green", genre: genre)
      review1 = Review.create(user_id: 1, book: book, content: "a", rating: 1)
      review2 = Review.create(user_id: 1, book: book, content: "a", rating: 2)
      review1.save
      review2.save
      expect(genre.rating_avg).to eq((review1.rating + review2.rating)/2)
    end
  end
end
