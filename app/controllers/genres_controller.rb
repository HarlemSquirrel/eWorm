class GenresController < ApplicationController
  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @genre }
    end
  end
end
