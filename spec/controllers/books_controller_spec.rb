require 'rails_helper'

# These tests are not valid with angular front-end
=begin
RSpec.describe BooksController, type: :controller do

  describe 'GET index' do
    it 'renders the index template' do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe 'GET show' do
    it 'renders the show template' do
      author = Author.create(name: "George III")
      genre = Genre.create(name: "non-fiction")
      @book = author.books.create(title: "Getting Testy", genre: genre, year_published: 1099)
      @book.save

      get :show, id: @book.id
      expect(response).to render_template("show")
    end
  end

  describe 'PUT create' do
    it 'when signed in, creats a new book and redirects to the show page' do
      user = FactoryGirl.create(:user)
      sign_in(user)
      num_books = Book.count
      params = {}
      params[:book] = {title: "Getting Testy", author: "George III", genre: "non-fiction", year_published: 1099}

      put :create, params
      expect(response).to redirect_to(book_path(Book.last))
      expect(Book.count).to eq(num_books + 1)
    end

    it 'when not signed in, redirects to login page' do
      num_books = Book.count
      params = {}
      params[:book] = {title: "Getting Testy", author: "George III", genre: "non-fiction", year_published: 1099}

      put :create, params
      expect(response).to redirect_to(new_user_session_path)
      expect(Book.count).to eq(num_books)
    end
  end

  describe 'GET new' do
    it 'when signed in, allows access' do
      user = FactoryGirl.create(:user)
      sign_in(user)

      get :new
      expect(response).to render_template(:new)
    end

    it 'when not signed in, redirects to login page' do

      get :new
      expect(response).to redirect_to(new_user_session_path)
    end
  end
end
=end
