class Category < ActiveHash::Base
  self.data = [
    {id: 0, name: '---'},
    {id: 1, name: '宇宙世紀モノ'},
    {id: 2, name: '宇宙世紀以外'},
    {id: 3, name: 'ガンプラ'},
  ]

  include ActiveHash::Associations
  has_many :rooms
end