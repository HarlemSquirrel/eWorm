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
    it 'knows the rating average' do
      book = Book.create(title: "The Test")
      review1 = Review.create(book: book, rating: 1)
      review2 = Review.create(book: book, rating: 2)
      review1.save
      review2.save
      expect(book.rating_avg).to eq((review1.rating + review2.rating)/2)
    end
  end
end
