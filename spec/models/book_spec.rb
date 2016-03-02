require 'rails_helper'

RSpec.describe Book, type: :model do
  #before(:each) do
  #  @book = Book.create(title: "The Test")
  #end

  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:year_published) }
  end

  describe 'association' do
    it { should have_many(:reviews) }
  end

  describe '#rating_avg' do
    book = Book.create(title: "The Test")

    it 'returns nil when there are no reviews' do
      expect(book.rating_avg).to eq(nil)
    end

    it 'knows the rating average' do
      review1 = Review.create(user_id: 1, book: book, content: "a", rating: 1)
      review2 = Review.create(user_id: 1, book: book, content: "a", rating: 2)
      review1.save
      review2.save
      expect(book.rating_avg).to eq((review1.rating + review2.rating)/2.0)
    end
  end
end
