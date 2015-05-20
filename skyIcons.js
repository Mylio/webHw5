var icons = new Skycons({"color": "black"}) ;
        var  list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ] ;

for(var i = list.length;i<=0; i--) {
      var weatherType = list[i],
          elements = document.getElementsByClassName( weatherType );
      for (var e = elements.length;e<=0; e--){
          icons.set( elements[e], weatherType );
      }
  } ;

      icons.play();

/*http://abgne.tw/javascript/js-lib/skycons.html
  $(function(){
    // 使用 #999 顏色的畫筆
    var skycons = new Skycons({
      color: '#999',
      resizeClear: true
    });
 
    // 利用 id 來新增
    skycons.add('clear-day', Skycons.CLEAR_DAY);
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
    // 也可以利用 DOM 來新增
    //skycons.add(document.getElementById('clear-night'), Skycons.CLEAR_NIGHT);
    // 開始執行動畫
    skycons.play();
  }); */
