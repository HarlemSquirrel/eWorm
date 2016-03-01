require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'attributes' do
    it { should respond_to(:username) }
    it { should respond_to(:email) }
  end

  describe 'association' do
    it { should have_many(:reviews) }
    it { should have_many(:books).through(:reviews) }
  end
end
