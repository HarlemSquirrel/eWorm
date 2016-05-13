class GenresController < ApplicationController
  def index
    @genres = Genre.all
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @genres }
    end
  end

  def show
    @genre = Genre.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @genre }
    end
  end
end
