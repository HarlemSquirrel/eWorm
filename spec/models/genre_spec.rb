require 'rails_helper'

RSpec.describe Genre, type: :model do
  describe 'attributes' do
    it { should respond_to(:name) }
  end

  describe 'association' do
    it { should have_many(:books) }
    it { should have_many(:authors).through(:books) }
  end
end
