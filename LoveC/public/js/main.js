/*function StartButtonClick(){
//  $.getJSON("../routes/data.json", function(sample_list){
  $.getJSON("./data/data.json", function(sample_list){
    for(var i in sample_list){
      console.log(sample_list);
      var h = '<dt>'
            + sample_list[i].list
            + '</dt>'
            + '<dd>'
            + sample_list[i].content
            + '</dd>';
      $("dl#wrap").append(h);
    }
  });
}
*/
function getJson() {
  //var xmlhttp = createXMLHttpRequest(); //旧バージョンのIEなどに対応する場合
  var xmlhttp = new XMLHttpRequest();

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
      } else {
      }
    }
  }
  xmlhttp.open("GET", "./data/data.json");
  xmlhttp.send();
}

function startfnc()
{
  //関数hyoji()を1000ミリ秒間隔で呼び出す
  setInterval("getJson()",1000);
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
