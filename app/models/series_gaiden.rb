class Series_Gaiden < ActiveHash::Base
  self.data = [
  {id: 0, name: '---'},
  {id: 17, name: '機動武闘伝Gガンダム'},
  {id: 18, name: '新機動戦記ガンダムW'},
  {id: 19, name: '機動新世紀ガンダムX'},
  {id: 20, name: '∀ガンダム'},
  {id: 21, name: '機動戦士ガンダムSEED'},
  {id: 22, name: '機動戦士ガンダムOO'},
  {id: 23, name: '機動戦士ガンダムAGE'},
  {id: 24, name: 'ガンダム Gのレコンギスタ'},
  {id: 25, name: '機動戦士ガンダム 鉄血のオルフェンズ'}
]
  include ActiveHash::Associations
  has_many :rooms
end