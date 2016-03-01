class AuthorsController < ApplicationController
  def show
    @author = Author.find(params[:id])
    #binding.pry
  end
end
