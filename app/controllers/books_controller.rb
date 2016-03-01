class BooksController < ApplicationController
  def index
    @books = Book.all
    #binding.pry
  end

  def new
    @book = Book.new
  end

  def show
    @book = Book.find(params[:id])
  end
end
