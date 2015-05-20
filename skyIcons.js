
  $(function(){
    // 使用 #999 顏色的畫筆
    var skycons = new Skycons({
      color: '#999',
      resizeClear: true
    });
 
    // 利用 id 來新增
    skycons.add('clear-day', Skycons.CLEAR_DAY);
 
    // 也可以利用 DOM 來新增
    skycons.add(document.getElementById('clear-night'), Skycons.CLEAR_NIGHT);
 
    // 也可以利用 .set() 的方式來新增或是修改
    skycons.set('partly-cloudy-day', Skycons.PARTLY_CLOUDY_DAY);
    skycons.set('partly-cloudy-night', Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.set('cloudy', Skycons.CLOUDY);
    skycons.set('rain', Skycons.RAIN);
    skycons.set('sleet', Skycons.SLEET);
    skycons.set('snow', Skycons.SNOW);
    skycons.set('wind', Skycons.WIND);
    skycons.set('fog', Skycons.FOG);
 
 
    skycons.set('clear-night', Skycons.FOG);
 
    // 開始執行動畫
    skycons.play();
    ;
      console.log(skycons);
    $('#play').click(function(){
      // 開始執行動畫
      skycons.play();
    });
 
    $('#pause').click(function(){
      // 暫停執行動畫
      skycons.pause();
    });
 
    $('#remove').click(function(){
      // 停止更新晴天的動畫
      skycons.remove('clear-day');
 
      // 清掉該畫布內容
      var $clearDay = $('#clear-day');
      $clearDay[0].getContext('2d').clearRect(0, 0, $clearDay.width(), $clearDay.height());
    });
  });
