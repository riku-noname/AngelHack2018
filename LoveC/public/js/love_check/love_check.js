var tmp = 0;
var dataFile = "../data/data.json";
var heartImg = "../img/beating_heart.gif";
//var heartImg2 = "../img/heart.jpg";
var heartImg2 = "../img/heart_1.png";
function getJson() {
  //var xmlhttp = createXMLHttpRequest(); //旧バージョンのIEなどに対応する場合
  var xmlhttp = new XMLHttpRequest();
  var sumBeat;
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);

        var elem = document.getElementById("User_ID_1");
        elem.innerText = data[0].Id;
        var elem = document.getElementById("HeartBeat_1");
        elem.innerText = data[0].HeartBeat;
        var elem = document.getElementById("User_ID_2");
        elem.innerText = data[1].Id;
        var elem = document.getElementById("HeartBeat_2");
        elem.innerText = data[1].HeartBeat;
        //合計計算と判定

        if(data[3].Start == 0){
          sendinfo();
        }
        sumBeat = data[0].HeartBeat + data[1].HeartBeat
        if(sumBeat > 220 && tmp == 0){
          playMusic();
          tmp = -1;
        }
        //画像の表示
        //document.getElementById("heartbeat_img");
        document.getElementById('heartbeat_img_l').src=heartImg;
        document.getElementById('heartbeat_img_r').src=heartImg;
        document.getElementById('heartbeat_img_c').src=heartImg2;
          //document.write('<img src="img/beating_heart.gif" alt="UX MILK">')
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
