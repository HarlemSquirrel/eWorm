require 'rails_helper'

RSpec.describe Book, type: :model do
  before(:all) do
    author = Author.create(name: "George III")
    genre = Genre.create(name: "truthy")
    @book = author.books.create(title: "Getting Testy", genre: genre, year_published: 1)
    @book.save
    @review1 = @book.reviews.create(user_id: 1, content: "terrible", rating: 1)
    @review2 = @book.reviews.create(user_id: 2, content: "not good", rating: 2)

    @unsaved_book = Book.new
  end

  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:year_published) }
  end

  describe 'association' do
    it { should have_many(:reviews) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title)}
    it { should validate_presence_of(:author_id)}
    it { should validate_presence_of(:genre_id)}
  end

  describe '#rating_avg' do
    it 'returns nil when there are no reviews' do
      expect(@unsaved_book.rating_avg).to eq("no reviews...yet")
    end

    it 'knows the rating average' do
      expect(@book.rating_avg).to eq((@review1.rating + @review2.rating)/2.0)
    end
  end

  describe '#unreviewed?' do
    it 'returns true for books with no reviews' do
      expect(@unsaved_book.unreviewed?).to eq(true)
    end

    it 'returns false for books with reviews' do
      expect(@book.unreviewed?).to eq(false)
    end
  end
end
