//初期設定
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
//const fs = require('fs');
var fs = require('fs');
var path = require('path');
var dataFile = "../public/data/data.json";
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

    var Id = request.body.Id;
    var HeartBeat; //心拍数
    var Pressure; //圧力値
    var Start; //スターと判定
    var init; //心拍数初期値

    if (Id == '1'){
      HeartBeat = request.body.HeartBeat;
      console.log("Info of HeartBeat : " + HeartBeat);
      console.log("POST from ID【1】");
      response.end("ID【1】's POST OK !!" + "HeartBeat : " + HeartBeat);
      //jsonデータ更新
      jdata[Id-1].HeartBeat = parseInt(HeartBeat,10);
    }
    else if(Id == '2'){
      HeartBeat = request.body.HeartBeat;
      console.log("Info of HeartBeat : " + HeartBeat);
      console.log("POST from ID【2】");
      response.end("ID【2】's POST OK !!" + "HeartBeat : " + HeartBeat);
      //jsonデータ更新
      jdata[Id-1].HeartBeat = parseInt(HeartBeat,10);
    }
    else if(Id == '3'){
      Pressure = request.body.Pressure;
      console.log("Info of Pressure : " + Pressure);
      console.log("POST from ID【3】");
      response.end("ID【3】's POST OK !!" + "Pressure : " + Pressure);
      //jsonデータ更新
      jdata[Id-1].Pressure = parseInt(Pressure,10);
    }
    else if(Id == '4'){
      Start = request.body.Start;
      console.log("Info of Start : " + Start);
      console.log("POST from ID【4】");
      response.end("ID【4】's POST OK !!" + "Start : " + Start);
      //jsonデータ更新
      jdata[Id-1].Start = parseInt(Start,10);
    }
    else{
      console.log("ID Unknown...");
      response.end("Who are you ?");
    }

    fs.writeFileSync(
      path.resolve( __dirname , dataFile ),
      JSON.stringify(jdata,null,'  '),
      "utf-8",
      console.log("データ更新完了:",jdata)
    );
    console.log("データ更新:",jdata);

    //hue();
    var host = '192.168.11.4',
        username = 'ywwCNrGvMqwrbAvfXvbmQEKBllXc2yZxrYnlUWcw',
        flag1 = 1;
        flag2 = 2;

    //hue ID:2
    var lightid_1 = 2,
        turnlight = 1,
        heart_1_init = 0,
        heart_2_init = 0;

    //hue ID:3
    var lightid_2 = 3;
      //  color_2 = JSON.parse('{"red":0,"green":0,"blue":255,"brightness":100}'

      const Cylon = require('cylon');
    //        json = require('../public/data/data.jdata');

        var id_1 = jdata[0].Id,
            id_2 = jdata[1].Id,
            heart_1 = jdata[0].HeartBeat,
            heart_2 = jdata[1].HeartBeat;

       console.log("Start:----------"+jdata[3].Start);
        if(flag1 == 1 && jdata[3].Start == 1){
          console.log("change");
          heart_1_init = heart_1;
          heart_2_init = heart_2;
          jdata[0].init = heart_1;
          jdata[1].init = heart_1;
          jdata[3].Start = 2;
        }


        if(heart_1 >= 0 && heart_1-heart_1_init < 5){
            var color_1 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
        }
        else if(heart_1-heart_1_init >= 5 && heart_1-heart_1_init < 10){
            var color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_1-heart_1_init >= 10 && heart_1-heart_1_init < 15){
            var color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_1-heart_1_init >= 15 && heart_1-heart_1_init < 20){
            var color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_1-heart_1_init >= 20){
            var color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }

        if(heart_2 >= 0 && heart_2-heart_2_init < 5){
            var color_2 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
        }
        else if(heart_2-heart_2_init >= 5 && heart_2-heart_2_init < 10){
            var color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_2-heart_2_init >= 10 && heart_2-heart_2_init < 15){
            var color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_2-heart_2_init >= 15 && heart_2-heart_2_init < 20){
            var color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }
        else if(heart_2-heart_2_init >= 20){
            var color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
        }

        if(flag1 == jdata[3].Start || flag2 == jdata[3].Start){ Light_Change(); }



    function Light_Change(){
        Cylon.robot({
            connections: {
                hue: { adaptor: 'hue', host: host, username: username }
            },

            devices: {
                bulb_1: { driver: 'hue-light', lightId: lightid_1 }, bulb_2: { driver: 'hue-light', lightId: lightid_2 }
            },

            work: function(my) {
                if(turnlight == 1){
                    // brightnessを先に指定しないと色の設定が無効になる
                    my.bulb_1.brightness(color_1.brightness);

                    my.bulb_1.rgb(color_1.red, color_1.green, color_1.blue);

                    // brightnessを先に指定しないと色の設定が無効になる
                    my.bulb_2.brightness( color_2.brightness );

                    my.bulb_2.rgb(color_2.red, color_2.green, color_2.blue);

                    my.bulb_1.turnOn();

                    my.bulb_2.turnOn();
                }
                else{
                    my.bulb_1.turnOff();
                    my.bulb_2.turnOff();
                    console.log('turnOff()');
                }
            }
        }).start();
    };

    //JSONデータ上書き保存
    //var record = JSON.stringify(jdata[0]);
    //fss.appendFile(dataFile,record+"\n");
    //fss.writeFile("data2.json",JSON.stringify(jdata,null,"  "));
/*    fs.writeFileSync(
      path.resolve( __dirname , dataFile ),
      JSON.stringify(jdata,null,'  '),
      "utf-8"
    );
    console.log("データ更新:",jdata);
*/
});

//追加
//function hue(){



//}




module.exports = router;
