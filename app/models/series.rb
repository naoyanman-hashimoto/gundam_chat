class Series < ActiveHash::Base
  self.data = [
    {id: 0, name: '---'},
    {id: 1, name: 'ガンダムオリジン'},
    {id: 2, name: 'ガンダム MSイグルー'},
    {id: 3, name: '機動戦士ガンダム'},
    {id: 4, name: 'ガンダム 第08MS小隊'},
    {id: 5, name: 'ガンダム0080 ポケットの中の戦争'},
    {id: 6, name: 'ガンダム サンダーボルト'},
    {id: 7, name: 'ガンダム0083 STARDUST MEMORY'},
    {id: 8, name: '機動戦士Zガンダム'},
    {id: 9, name: '機動戦士ガンダムZZ'},
    {id: 10, name: '機動戦士ガンダム 逆襲のシャア'},
    {id: 11, name: '機動戦士ガンダムUC'},
    {id: 12, name: '機動戦士ガンダムNT'},
    {id: 13, name: '機動戦士ガンダム 閃光のハサウェイ'},
    {id: 14, name: '機動戦士ガンダムF91'},
    {id: 15, name: '機動戦士Vガンダム'},
    {id: 16, name: '機動武闘伝Gガンダム'},
    {id: 17, name: '新機動戦記ガンダムW'},
    {id: 18, name: '機動新世紀ガンダムX'},
    {id: 19, name: '∀ガンダム'},
    {id: 20, name: '機動戦士ガンダムSEED'},
    {id: 21, name: '機動戦士ガンダムOO'},
    {id: 22, name: '機動戦士ガンダムAGE'},
    {id: 23, name: 'ガンダム Gのレコンギスタ'},
    {id: 24, name: '機動戦士ガンダム 鉄血のオルフェンズ'},
    {id: 25, name: 'HG'},
    {id: 26, name: 'RG'},
    {id: 27, name: 'MG'},
    {id: 28, name: 'PG'}
  ]
    include ActiveHash::Associations
    has_many :rooms
end
