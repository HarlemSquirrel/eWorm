require 'rails_helper'

RSpec.describe Review, type: :model do
  before(:each) do
    @review = Review.create
  end

  describe 'attributes' do
    it { should respond_to(:content) }
    it { should respond_to(:rating) }
  end

  describe 'association' do
    it { should belong_to(:book) }
    it { should belong_to(:user) }
  end

end
