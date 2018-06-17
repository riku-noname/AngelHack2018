var tmp = 0;
function getJson() {
  //var xmlhttp = createXMLHttpRequest(); //旧バージョンのIEなどに対応する場合
  var xmlhttp = new XMLHttpRequest();
  var sumBeat;
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);

        var elem = document.getElementById("Pressure");
        var press = parseInt((data[2].Pressure / 700)*100,10)
        if(press > 100){
          press = 100
        }

        elem.innerText = press;


        //合計計算と判定
        sumBeat = data[0].HeartBeat + data[1].HeartBeat
        if(data[2].Pressure > 700 && tmp == 0){
          playMusic();
          tmp = -1;
        }
      } else {
      }
    }
  }
  xmlhttp.open("GET", "../data/data.json");
  xmlhttp.send();
}

function startfnc()
{
  //関数hyoji()を1000ミリ秒間隔で呼び出す
  setInterval("getJson()",1000);
  //スタートボタンを削除
  var d1 = document.getElementById('button_start');
  d1.parentNode.removeChild(d1);
}

function createXMLHttpRequest() {
  if (window.XMLHttpRequest) { return new XMLHttpRequest() }
  if (window.ActiveXObject) {
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) { }
    try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { }
  }
  return false;
}
