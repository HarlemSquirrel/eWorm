class VisitorsController < ApplicationController
  def index
    @num_books = Book.all.count
    @num_reviews = Review.all.count
    @num_users = User.all.count
    @reviews= Review.all[(@num_reviews-4)..(@num_reviews-1)]
  end

  def about
  end
end
