function seriesForms() {
  const category = document.getElementById("category-form")
  const seriesSelect = document.getElementById("series-form")
  const submitBtn = document.getElementById("submit")

  // カテゴリーを2回以上変更しようとすると確認表示が表示され、OKを選択するとページがリロードされる
  // リロードにより削除されたシリーズ情報がリセットされ、再度カテゴリー選択した際に正しくシリーズ選択できる
  let count = 0;
  category.addEventListener('click', function(){
    count += 1
    if(count >= 2){
      if(window.confirm('カテゴリーを変更しますか？\nOKを押すと再度選択する事ができます')){
        location.reload();
      } else {

      };
    };
  });

  // カテゴリー選択した結果によって、シリーズ内容を変更(削除)する
  category.addEventListener('change', function(){
    let i = 1;
    if(category.value == 1){
      // 外伝枠のid:16~24とガンプラ枠のid:25~28のseriesSelectを順番に削除(合計13回)
      while(i <= 13){
        let series = seriesSelect.remove(16);
        i += 1
      };
    } else if (category.value == 2){
      // まずはガンプラ枠のid:25~28のseriesSelectを順番に削除
      remove_count = 1;
      while(remove_count <= 4){
        seriesSelect.remove(25)
        remove_count += 1
      }
      // 続いて、宇宙世紀枠のid:1~15までのseriesSelectを順番に削除
      while(i <= 15){
        seriesSelect.remove(1)
        i += 1
      };
    } else if (category.value == 3){
      // 宇宙世紀枠のid:1~15と外伝枠のid:16~24とガンプラ枠のid:25~28のseriesSelectを順番に削除
      while(i <= 24){
        seriesSelect.remove(1);
        i += 1
      };
    };
  });

  // create roomボタンをクリックした時にカテゴリーとシリーズ種類が狙った組み合わせでない場合はアラート発動
  // room create時にバリデーションに掛かるとシリーズ選択のイベントがリセットされ、その後の選択しだいで意図しない組み合わせを実現できてしまう
  // モデルのバリデーションのみでなく、アラート発動により目に見える警告を発信する
  // 'category.value == 2'時の記述を、&&演算子と||演算子でシンプルにしたかったが挙動が狂う為、&&演算子を二つ配置する事とした
  submitBtn.addEventListener('click', function(){
  let alertMessage = 'カテゴリーとシリーズの選択状態が不適切です\nお手数ですが、ご確認頂き修正をお願い致します'
    if(category.value == 1 && seriesSelect.value >= 16 ){
      window.alert(alertMessage)
    } else if (category.value == 2 && seriesSelect.value <= 15){
      window.alert(alertMessage)
    } else if (category.value == 2 && seriesSelect.value >= 25){
      window.alert(alertMessage)
    }  else if (category.value == 3 && seriesSelect.value <= 24){
      window.alert(alertMessage)
    };
  });

};
window.addEventListener('load', seriesForms)