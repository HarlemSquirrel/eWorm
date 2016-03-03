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

  describe 'validations' do
    it { should validate_presence_of(:content) }
    it { should validate_presence_of(:rating) }
    it { should validate_presence_of(:book_id) }
    it { should validate_presence_of(:user_id) }
    it { should validate_uniqueness_of(:book_id).scoped_to(:user_id) }
    it { should validate_length_of(:content) }
  end

end
