class ReviewsController < ApplicationController
  def new
    if logged_in?
      @review = Review.new
      @book = Book.find(params[:id])
    else
      redirect_guests
    end
  end

  def create
    if logged_in?
      @review = current_user.reviews.create(review_params)
      if @review.valid?
        @review.save
        flash.notice = "Review creation successful!"
        redirect_to book_path(@review.book)
      else
        @book = @review.book
        render :new
      end
    else
      redirect_guests
    end
  end

  def edit
    if logged_in?
      @review = Review.find(params[:id])
      @book = @review.book
      unless @review.user == current_user
        flash.alert = "You can only edit your own reviews"
        redirect_to @book
      end
    else
      redirect_guests
    end
  end

  def update
    if logged_in?
      @review = current_user.reviews.find(params[:id])
      @review.update(review_params)
      if review.valid?
        review.save
        flash.notice = "Review edit successful!"
        redirect_to book_path(review.book)
      else
        @book = @review.book
        render :edit
      end
    else
      redirect_guests
    end
  end

  private
  def review_params
    params.require(:review).permit(:book_id, :content, :rating)
  end

  def redirect_guests
    flash.alert = "You must be logged in write a review."
    redirect_to new_user_session_path
  end
end
