class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @book = Book.find(params[:id])
  end
end
