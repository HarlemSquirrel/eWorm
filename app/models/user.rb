class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #validates :username, :email, presence: true
  #validates :username, :email, uniqueness: true

  has_many :reviews
  has_many :books, through: :reviews

  scope :top_reviewers, -> { order('reviews_count DESC').limit(3) }
end
