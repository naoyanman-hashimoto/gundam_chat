function openBtns() {
  const roomCategory = document.querySelectorAll(".category")
  const btnParent = document.querySelectorAll(".openbtn-parent")
  const btnChild = document.querySelectorAll(".openbtn-child")
  const series = document.querySelectorAll(".series")
  const seriesName = document.querySelectorAll(".series--name")

  // カテゴリーのボタンをクリックした時に + ⇄ - するイベント
  // btnParent.forEach(function (btn){
  //   btn.addEventListener('click', function(){
  //     this.classList.toggle('active');
  //   });
  // });

  // シリーズのボタンをクリックした時に + ⇄ - するイベント
  // btnChild.forEach(function (btn){
  //   btn.addEventListener('click', function(){
  //     this.classList.toggle('active');
  //   });
  // });

  // ※上記ではボタンが小さく、ユーザーの使用感が悪くなりそうなので、カテゴリーやシリーズ本体をクリックしてイベント発火する事を狙う

  for(var value of roomCategory.values()){
    value.addEventListener('click', function(){
      // console.log(value)
      // console.log(this)
      // console.log(roomCategory.item(0))
      // roomCategoryはdocument.querySelectorAllで要素を取得している為、NodeListオブジェクトなのでitemメソッドを使用できる
      // ↑↑↑↑↑↑
      // なぜか？valueがroomCategory.item(2)※最後尾※になってしまう...
      // よって、条件分岐と直接指定でボタンが + ⇄ - するイベントを実装
      if(this == roomCategory.item(0)){
        btnParent.item(0).classList.toggle('active');
        series.item(0).classList.toggle('open');
      }else if(this == roomCategory.item(1)){
        btnParent.item(1).classList.toggle('active');
        series.item(1).classList.toggle('open');
      }else if(this == roomCategory.item(2)){
        btnParent.item(2).classList.toggle('active');
        series.item(2).classList.toggle('open');
      };
    });
  };

  // シリーズ名をクリックすると作成ずみのルームが表示されるプログラム
  // DRYに反する...もっとスマートにイベント発火させたい
  const room = document.querySelectorAll(".room")
  for(var value of seriesName.values()){
    value.addEventListener('click', function(){
      if(this == seriesName.item(0)){
        btnChild.item(0).classList.toggle('active');
        room.item(0).classList.toggle('open')
      }else if(this == seriesName.item(1)){
        btnChild.item(1).classList.toggle('active');
        room.item(1).classList.toggle('open')
      }else if(this == seriesName.item(2)){
        btnChild.item(2).classList.toggle('active');
        room.item(2).classList.toggle('open')
      }else if(this == seriesName.item(3)){
        btnChild.item(3).classList.toggle('active');
        room.item(3).classList.toggle('open')
      }else if(this == seriesName.item(4)){
        btnChild.item(4).classList.toggle('active');
        room.item(4).classList.toggle('open')
      }else if(this == seriesName.item(5)){
        btnChild.item(5).classList.toggle('active');
        room.item(5).classList.toggle('open')
      }else if(this == seriesName.item(6)){
        btnChild.item(6).classList.toggle('active');
        room.item(6).classList.toggle('open')
      }else if(this == seriesName.item(7)){
        btnChild.item(7).classList.toggle('active');
        room.item(7).classList.toggle('open')
      }else if(this == seriesName.item(8)){
        btnChild.item(8).classList.toggle('active');
        room.item(8).classList.toggle('open')
      }else if(this == seriesName.item(9)){
        btnChild.item(9).classList.toggle('active');
        room.item(9).classList.toggle('open')
      }else if(this == seriesName.item(10)){
        btnChild.item(10).classList.toggle('active');
        room.item(10).classList.toggle('open')
      }else if(this == seriesName.item(11)){
        btnChild.item(11).classList.toggle('active');
        room.item(11).classList.toggle('open')
      }else if(this == seriesName.item(12)){
        btnChild.item(12).classList.toggle('active');
        room.item(12).classList.toggle('open')
      }else if(this == seriesName.item(13)){
        btnChild.item(13).classList.toggle('active');
        room.item(13).classList.toggle('open')
      }else if(this == seriesName.item(14)){
        btnChild.item(14).classList.toggle('active');
        room.item(14).classList.toggle('open')
      }else if(this == seriesName.item(15)){
        btnChild.item(15).classList.toggle('active');
        room.item(15).classList.toggle('open')
      }else if(this == seriesName.item(16)){
        btnChild.item(16).classList.toggle('active');
        room.item(16).classList.toggle('open')
      }else if(this == seriesName.item(17)){
        btnChild.item(17).classList.toggle('active');
        room.item(17).classList.toggle('open')
      }else if(this == seriesName.item(18)){
        btnChild.item(18).classList.toggle('active');
        room.item(18).classList.toggle('open')
      }else if(this == seriesName.item(19)){
        btnChild.item(19).classList.toggle('active');
        room.item(19).classList.toggle('open')
      }else if(this == seriesName.item(20)){
        btnChild.item(20).classList.toggle('active');
        room.item(20).classList.toggle('open')
      }else if(this == seriesName.item(21)){
        btnChild.item(21).classList.toggle('active');
        room.item(21).classList.toggle('open')
      }else if(this == seriesName.item(22)){
        btnChild.item(22).classList.toggle('active');
        room.item(22).classList.toggle('open')
      }else if(this == seriesName.item(23)){
        btnChild.item(23).classList.toggle('active');
        room.item(23).classList.toggle('open')
      }else if(this == seriesName.item(24)){
        btnChild.item(24).classList.toggle('active');
        room.item(24).classList.toggle('open')
      }else if(this == seriesName.item(25)){
        btnChild.item(25).classList.toggle('active');
        room.item(25).classList.toggle('open')
      }else if(this == seriesName.item(26)){
        btnChild.item(26).classList.toggle('active');
        room.item(26).classList.toggle('open')
      }else if(this == seriesName.item(27)){
        btnChild.item(27).classList.toggle('active');
        room.item(27).classList.toggle('open')
      };

    });
  };




};
window.addEventListener('load', openBtns)