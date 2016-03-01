class VisitorsController < ApplicationController
  def index
    @num_books = Book.all.count
    @num_reviews = Review.all.count
    @num_users = User.all.count
  end

  def about
  end
end
