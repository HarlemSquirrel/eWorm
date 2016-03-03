require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do
  before(:all) do
    @user = FactoryGirl.create(:user)
    @book = FactoryGirl.create(:book)
    @num_reviews = Review.count
    @params = {review: {content: 'Wonderful!', book_id: @book.id, rating: 5}}
  end

  describe 'PUT create' do
    it 'when signed in, creats a new review by the current user' do
      sign_in(@user)
      put :create, @params
      expect(response).to redirect_to(book_path(@book))
      expect(Review.count).to eq(@num_reviews + 1)
    end

    it 'when not signed in, redirects to login page' do
      sign_out(@user)
      put :create, @params
      expect(@response).to redirect_to(new_user_session_path)
      expect(Review.count).to eq(@num_reviews)
    end
  end

  describe 'GET new' do
    it 'when signed in, allows access' do
      sign_in(@user)
      get :new, id: @book.id
      expect(response).to render_template(:new)
    end

    it 'when not signed in, redirects to login page' do
      sign_out(@user)
      get :new, id: @book.id
      expect(response).to redirect_to(new_user_session_path)
    end
  end
end
