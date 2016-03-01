require 'rails_helper'

RSpec.describe Author, type: :model do
  describe 'attributes' do
    it { should respond_to(:name) }
  end

  describe 'association' do
    it { should have_many(:books) }
    it { should have_many(:genres).through(:books) }
    it { should have_many(:reviews).through(:books) }
  end
end
