require 'rails_helper'

RSpec.describe GenresController, type: :controller do
  describe 'GET index' do
    xit 'renders the index template' do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe 'GET show' do
    it 'renders the show template' do
      genre = Genre.create(name: "spooky")
      get :show, id: genre.id
      expect(response).to render_template("show")
    end
  end
end
