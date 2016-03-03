require 'rails_helper'

RSpec.describe Genre, type: :model do
  before(:all) do
    author = FactoryGirl.create(:author)
    @genre = FactoryGirl.create(:genre)
    @book = @genre.books.create(title: "Getting Testy with It", author: author, year_published: 1)
    
    @review1 = @book.reviews.create(user_id: 1, content: "terrible", rating: 1)
    @review2 = @book.reviews.create(user_id: 2, content: "not good", rating: 2)

    @unsaved_genre = Genre.new
  end

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
    it 'returns nil when there are no reviews' do
      expect(@unsaved_genre.rating_avg).to eq("no reviews...yet")
    end

    it 'knows the rating average' do
      expect(@genre.rating_avg).to eq((@review1.rating + @review2.rating)/2.0)
    end
  end
end
