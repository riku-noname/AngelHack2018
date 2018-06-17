var data ={
  Id:4,
  Start:1
}

function sendinfo() {
/*    var assoc = {};

    //セレクトボックスの値を変数に保存
    assoc.area = $('[name=area]').val();
    console.log(assoc.area);

    //ラジオボタンの値を変数に保存
    assoc.gender = $('[name=gender]:checked').val();
    console.log(assoc.gender);

    //選択されたチェックボックスの値を配列に保存
    assoc.knownby = $('[name=knownby]:checked').map(function() {
      return $(this).val();
    }).get();
    console.log(assoc.knownby);

    data = JSON.stringify( assoc );
*/
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function()
    {
        var READYSTATE_COMPLETED = 4;
        var HTTP_STATUS_OK = 200;

        if( this.readyState == READYSTATE_COMPLETED
         && this.status == HTTP_STATUS_OK )
        {
            // レスポンスの表示
            //alert( this.responseText );
            //$('[name=result]').val(this.responseText);
        }
    }

    xmlHttpRequest.open( 'POST', '/',false );

    // サーバに対して解析方法を指定する
    xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json');

    // データをリクエスト ボディに含めて送信する
    xmlHttpRequest.send( JSON.stringify(data) );

}

/*
var http = require("http");
var querystring = require("querystring");
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

// 送信データ作成
var json_data = {
    id: 4,
    Start: 1
}
var qs_data = querystring.stringify(json_data);
var options = {
    hostname: '192.168.11.9',
    port: 3000,
    path: '/rest',
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(qs_data)
    }
};

// リクエスト定義と応答処理設定
var req = http.request(options, function(res) {
    console.log("STATUS: ", res.statusCode);
    console.log("HEADERS: ", JSON.stringify(res.headers));
    res.setEncoding('utf8');

    // 応答受信処理
    res.on('data', function(chunk){
    console.log("BODY: ", chunk);
    // Query String -> JSON形式へ変換
    var rcv_text = querystring.parse(decoder.write(chunk))
        var rcv_json_text = JSON.stringify(rcv_text);
        var rcv_json = JSON.parse(rcv_json_text);
        console.log("json text = ", rcv_json.message);
        console.log("json number = ", rcv_json.sound);
        console.log("json boolean = ", rcv_json.reply);
    });
    // 応答終了処理
    res.on('end', function(){
    console.log('これ以上データはありません。')
    });
});
// 送信のエラー処理
req.on('error', function(e){
  console.log( "エラー発生: ", e.message);
});
// データ送信(GET)
req.write(qs_data);
req.end();
*/
