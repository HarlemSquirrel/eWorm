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

  describe 'validations' do
    it { should validate_length_of(:name)}
  end

  describe '#rating_avg' do
    genre = Genre.create(name: "Pulpy Fiction")
    unsaved_genre = Genre.new

    it 'returns nil when there are no reviews' do
      expect(unsaved_genre.rating_avg).to eq("no reviews...yet")
    end

    it 'knows the rating average' do
      book = genre.books.create(title: "The World is Green", author_id: 1)
      review1 = book.reviews.create(user_id: 1, content: "a", rating: 5)
      review2 = book.reviews.create(user_id: 2, content: "a", rating: 2)

      expect(genre.rating_avg).to eq((review1.rating + review2.rating)/2.0)
    end
  end
end
