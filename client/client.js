var data={ // 送信データ ('param=value&...')
  "Id" : 1,
  "HeartBeat" : 85
}
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url='http://172.20.11.229:3000'; // リクエスト先URL
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
