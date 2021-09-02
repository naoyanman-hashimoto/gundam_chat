class Gunpura < ActiveHash::Base
  self.data = [
    {id: 0, name: '---'},
    {id: 26, name: 'HG'},
    {id: 27, name: 'RG'},
    {id: 28, name: 'MG'},
    {id: 29, name: 'PG'}
  ]
    include ActiveHash::Associations
    has_many :rooms
end