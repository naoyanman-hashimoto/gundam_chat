class Room < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :series
  belongs_to :series_gaiden
  belongs_to :gunpura

  has_many :room_users
  has_many :users, through: :room_users

  validates :name, presence: true
  validates :category_id, numericality: { other_than: 0 , message: "can't be blank"}
  validates :series_id, numericality: { other_than: 0 , message: "can't be blank"}
end
