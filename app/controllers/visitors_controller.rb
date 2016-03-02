class VisitorsController < ApplicationController
  def index
    @num_books = Book.count
    @num_reviews = Review.count
    @num_users = User.count
    @recent_reviews = Review.last(3).reverse
    @top_reviewers = User.top_reviewers
  end

  def about
  end
end
