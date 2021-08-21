# README
# アプリ名
  ## GUNDAM_CHAT
  ガンダム好きが集まり、気軽にコミュニケーションを取れるチャットアプリです。  
  特に、最近ガンダムに興味を持ったビギナー向けの優しい雰囲気が特徴です。

# テーブル設計

## users テーブル
| Column             | Type   | Options     |
| ------------------ | ------ | ----------- |
| name               | string | null: false |
| email              | string | null: false |
| encrypted_password | string | null: false |

### Association
- has_many :room_users
- has_many :rooms, through: :room_users
- has_many :messages

## rooms テーブル
| Column      | Type    | Options     |
| ----------- | ------- | ----------- |
| category_id | integer | null: false |
| series_id   | integer | null: false |
| name        | string  | null: false |

### Association
- has_many :room_users
- has_many :users, through: :room_users
- has_many :messages


## room_users テーブル
| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| room   | references | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :room


## message テーブル
| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| content | string     |                                |
| user    | references | null: false, foreign_key: true |
| room    | references | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :room