class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, omniauth_providers: [:twitter]
  #validates :username, :email, presence: true
  #validates :username, :email, uniqueness: true

  has_many :reviews
  has_many :books, through: :reviews

  scope :top_reviewers, -> { order('reviews_count DESC').limit(3) }

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.email ||= "unknown"
      user.password = Devise.friendly_token[0,20]
      #binding.pry
      user.username = auth.info.nickname
    end
  end
end
