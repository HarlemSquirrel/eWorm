require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a username" do
    expect(user).to respond_to(:username)
  end

end
