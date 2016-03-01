require 'rails_helper'

RSpec.describe Book, type: :model do
  before(:each) do
    @book = Book.create
  end

  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:year_published) }
  end

  describe 'association' do
    it { should have_many(:reviews) }
  end
  
end
