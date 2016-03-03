class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    if logged_in?
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
        @authors = Author.all
        @genres = Genre.all
        render :new
      end
    else
      redirect_guests
    end
  end

  def new
    if logged_in?
      @book = Book.new
      @authors = Author.all
      @genres = Genre.all
    else
      redirect_guests
    end
  end

  def show
    @book = Book.find(params[:id])

    if logged_in?
      @review_by_current_user = current_user.reviews.where(book: @book).first
    end

  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :genre, :year_published)
  end

  def redirect_guests
    flash.alert = "You must be logged in to add a book."
    redirect_to new_user_session_path
  end
end
