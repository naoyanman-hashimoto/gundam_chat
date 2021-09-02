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
    {id: 15, name: '機動戦士Vガンダム'}
  ]
    include ActiveHash::Associations
    has_many :rooms
end
