require 'rails_helper'

RSpec.describe AuthorsController, type: :controller do
  describe 'GET index' do
    xit 'renders the index template' do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe 'GET show' do
    it 'renders the show template' do
      author = Author.create(name: "Arthur")
      get :show, id: author.id
      expect(response).to render_template("show")
    end
  end
end
