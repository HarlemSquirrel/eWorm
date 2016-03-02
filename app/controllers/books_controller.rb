class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    redirect_guests

    @book = Book.create(
      title: book_params[:title],
      year_published: book_params[:year_published],
      author: Author.find_or_create_by(name: book_params[:author]),
      genre: Genre.find_or_create_by(name: book_params[:genre])
    )

    if @book.valid?
      @book.save
      flash.notice = "Book addition successful!"
      redirect_to book_path(@book)
    else
      flash.alert = "Invalid info. Please try again."
      redirect_to new_book_path
    end
  end

  def new
    redirect_guests

    @book = Book.new
    @authors = Author.all
    @genres = Genre.all
  end

  def show
    @book = Book.find(params[:id])
    @review_by_current_user = @book.reviews.detect {|r| r.user == current_user}
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :genre, :year_published)
  end

  def redirect_guests
    if !logged_in?
      flash.alert = "You must be logged in to add a book."
      redirect_to new_user_session_path
    end
  end
end
