class ReviewsController < ApplicationController
  def new
    return redirect_guests unless user_signed_in?

    @review = Review.new
    @book = Book.find(params[:id])
  end

  def create
    return redirect_guests unless user_signed_in?

    @review = current_user.reviews.create(review_params)
    if @review.valid?
      @review.save
      flash.notice = "Review creation successful!"
      redirect_to book_path(@review.book)
    else
      @book = @review.book
      render :new
    end
  end

  def edit
    return redirect_guests unless user_signed_in?

    @review = Review.find(params[:id])
    @book = @review.book
    unless @review.user == current_user
      flash.alert = "You can only edit your own reviews"
      redirect_to @book
    end
  end

  def update
    return redirect_guests unless user_signed_in?

    @review = current_user.reviews.find(params[:id])
    @review.update(review_params)
    if @review.valid?
      @review.save
      flash.notice = "Review edit successful!"
      redirect_to book_path(@review.book)
    else
      @book = @review.book
      render :edit
    end
  end

  private
  def review_params
    params.require(:review).permit(:book_id, :content, :rating)
  end
end
