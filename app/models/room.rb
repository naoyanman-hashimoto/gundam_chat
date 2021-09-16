class Room < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :series

  has_many :room_users
  has_many :users, through: :room_users

  validates :name, presence: true
  validates :category_id, numericality: { other_than: 0 , message: "can't be blank"}
  validates :series_id, numericality: { other_than: 0 , message: "can't be blank"}
  validates :series_id, numericality: { less_than: 16 , message: "is invalid"}, if: :series_validates__1
  validates :series_id, numericality: { greater_than: 15 , message: "is invalid"}, if: :series_validates__2_1
  validates :series_id, numericality: { less_than: 25 , message: "is invalid"}, if: :series_validates__2_2
  validates :series_id, numericality: { greater_than: 24 , message: "is invalid"}, if: :series_validates__3

  private
  # 'category_id == 2'時の記述を、&&演算子と||演算子でシンプルにしたかったが挙動が狂う為、&&演算子を二つ配置する事とした
  def series_validates__1
    category_id == 1 && series_id >= 16
  end
  def series_validates__2_1
    category_id == 2 && series_id <= 15
  end
  def series_validates__2_2
    category_id == 2 && series_id >= 25
  end
  def series_validates__3
    category_id == 3 && series_id <= 24
  end
end
