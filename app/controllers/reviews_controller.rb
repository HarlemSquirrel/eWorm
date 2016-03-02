class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @book = Book.find(params[:id])
  end

  def create
    if logged_in?
      @review = current_user.reviews.create(review_params)
      if review.valid?
        @review.save
        redirect_to book_path(@review.book)
      else
        flash.alert = "Invalid info. Please try again."
        @book = @review.book
        render :new
      end
    else
      flash.alert = "You must be logged in to write a review."
      redirect_to new_user_session_path
    end
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
