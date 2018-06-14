//初期設定
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
//const fs = require('fs');
var fs = require('fs');
var path = require('path');
var dataFile = "./data.json";
// モデルの宣言
//const LoveCheck = require('../models/lovecheck');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Love Check' });
});

//JSONファイル読み込み
var jdata = require(dataFile);
console.log("初期データ:",jdata);

router.post('/', function(request, response){
    console.log("catch the post request");
    response.setHeader('Content-Type', 'text/plain');

    // パラメータ名を出力
    console.log("POST ID : " + request.body.Id);
    console.log("Info of HeartBeat : " + request.body.HeartBeat);

    var Id = request.body.Id;
    var HeartBeat = request.body.HeartBeat;

    if (Id == '1'){
      console.log("POST from ID【1】");
      response.end("ID【1】's POST OK !!" + "HeartBeat : " + HeartBeat);
      //jsonデータ更新
      jdata[Id-1].HeartBeat = HeartBeat;
    }
    else if(Id == '2'){
      console.log("POST from ID【2】");
      response.end("ID【2】's POST OK !!" + "HeartBeat : " + HeartBeat);
      //jsonデータ更新
      jdata[Id-1].HeartBeat = HeartBeat;
    }
    else{
      console.log("ID Unknown...");
      response.end("Who are you ?");
    }

    //JSONデータ上書き保存
    //var record = JSON.stringify(jdata[0]);
    //fss.appendFile(dataFile,record+"\n");
    //fss.writeFile("data2.json",JSON.stringify(jdata,null,"  "));
    fs.writeFileSync(
      path.resolve( __dirname , dataFile ),
      JSON.stringify(jdata,null,'  '),
      "utf-8"
    );
    console.log("データ更新:",jdata);

});

module.exports = router;
