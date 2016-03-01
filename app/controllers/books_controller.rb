class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create

    author = Author.find_or_create_by(name: book_params[:author])
    genre = Genre.find_or_create_by(name: book_params[:genre])
    #binding.pry

    if Book.all.detect {|b| b.title == book_params[:title] && b.author == author && b.year_published == book_params[:year_published].to_i}
      flash[:alert] = "That book is already in the system!"
      redirect_to new_book_path
    else
      book = Book.create(
        title: book_params[:title],
        year_published: book_params[:year_published],
        author: author,
        genre: genre
      )
      redirect_to book_path(book)
    end
  end

  def new
    @book = Book.new
    @authors = Author.all
    @genres = Genre.all
  end

  def show
    @book = Book.find(params[:id])
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :genre, :year_published)
  end
end
