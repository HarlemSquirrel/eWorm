require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.create
  end

  describe 'User' do
    it "has a username" do
      expect(@user).to respond_to(:username)
    end

    it "has an email" do
      expect(@user).to respond_to(:email)
    end
  end
end
