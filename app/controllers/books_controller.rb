class BooksController < ApplicationController
  def index
    @books = Book.all
    #@authors = Author.all
    #@genres = Genre.all
    #if user_signed_in?
    #  @book = Book.new
#
    #end
    respond_to do |f|

      f.json { render json: @books }
    end
  end

  def create
    return redirect_guests unless user_signed_in?

    @book = Book.create(
      title: book_params[:title],
      year_published: book_params[:year_published],
      author: Author.find_or_create_by(name: book_params[:author]),
      genre: Genre.find_or_create_by(name: book_params[:genre])
    )

    if @book.valid?
      @book.save
      flash.notice = "Book addition successful!"
      #redirect_to book_path(@book)
      render json: @book, status: 201
    else
      @authors = Author.all
      @genres = Genre.all
      render :new
    end
  end

  def new
    return redirect_guests unless user_signed_in?

    @book = Book.new
    @authors = Author.all
    @genres = Genre.all
  end

  def show
    @book = Book.find(params[:id])

    #if user_signed_in?
    #  @review_by_current_user = current_user.reviews.where(book: @book).first
    #end
    #@review = Review.new if !@review_by_current_user

    respond_to do |f|
      #f.html { render :show }
      f.json { render json: @book }
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :genre, :year_published)
  end
end
