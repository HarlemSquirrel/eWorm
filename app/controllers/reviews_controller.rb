class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @book = Book.find(params[:id])
  end

  def create
    #binding.pry
    review = Review.create(review_params)
    review.user = current_user
    review.save
    redirect_to book_path(review.book)
  end

  private
  def review_params
    params.require(:review).permit(:content, :book_id)
  end
end
