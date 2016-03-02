class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @book = Book.find(params[:id])
  end

  def create
    review = Review.create(review_params)
    review.user = current_user
    review.save
    redirect_to book_path(review.book)
  end

  def edit
    @review = Review.find(params[:id])
    @book = @review.book
  end

  def update
    review = Review.find(params[:id])
    review.update(review_params)
    if review.save
      redirect_to book_path(review.book)
    else
      flash[:alert] = "something went wrong, please try again"
    end
  end

  private
  def review_params
    params.require(:review).permit(:book_id, :content, :rating)
  end
end
