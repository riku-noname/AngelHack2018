/*var data={ // 送信データ ('param=value&...')
  "Id" : 2,
  "HeartBeat" :1000
}*/
var data={ // 送信データ ('param=value&...')
  "Id" : 3,
  "Pressure" :"10000"
}
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url='http://192.168.100.102:3000'; // リクエスト先URL
var request = new XMLHttpRequest();
request.open('POST', url);
request.onreadystatechange = function () {
    if (request.readyState != 4) {
        // リクエスト中
    } else if (request.status != 200) {
        // 失敗
    } else {
        // 送信成功
        // var result = request.responseText;
    }
};
request.setRequestHeader('Content-Type', 'application/JSON');

request.send(JSON.stringify(data));
