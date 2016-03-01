require 'rails_helper'

RSpec.describe Author, type: :model do
  describe 'attributes' do
    it { should respond_to(:name) }
  end

  describe 'association' do
    it { should have_many(:books) }
    it { should have_many(:genres).through(:books) }
    it { should have_many(:reviews).through(:books) }
  end

  describe '#rating_avg' do
    author = Author.create(name: "Kermit the Frog")

    it 'returns nil when there are no reviews' do
      expect(author.rating_avg).to eq(nil)
    end

    it 'knows the rating average' do
      book = Book.create(title: "The World is Green", author: author)
      review1 = Review.create(user_id: 1, book: book, content: "a", rating: 1)
      review2 = Review.create(user_id: 1, book: book, content: "a", rating: 2)
      review1.save
      review2.save
      expect(author.rating_avg).to eq((review1.rating + review2.rating)/2)
    end
  end
end
