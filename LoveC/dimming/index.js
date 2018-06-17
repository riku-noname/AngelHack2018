var host = '192.168.11.4',
    username = 'ywwCNrGvMqwrbAvfXvbmQEKBllXc2yZxrYnlUWcw',
    flag = 1;

//hue ID:2
var lightid_1 = 2,
    turnlight = 1;

//hue ID:3
var lightid_2 = 3;

const Cylon = require('cylon');
var json = require('../public/data/data.json');

var id_1 = json[0].Id,
    id_2 = json[1].Id,
    heart_1_init = json[0].init,
    heart_2_init = json[1].init,
    heart_1 = json[0].HeartBeat,
    heart_2 = json[1].HeartBeat;

if(flag == 1 && heart_1_init == 0){
  heart_1_init = heart_1;
}
if(flag == 1 && heart_2_init == 0){
  heart_2_init = heart_2;
}

if(heart_1 >= 0 && heart_1-heart_1_init < 5){
    var color_1 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
}
else if(heart_1-heart_1_init >= 5 && heart_1-heart_1_init < 10){
    var color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
}
else if(heart_1-heart_1_init >= 10 && heart_1-heart_1_init < 15){
    var color_1 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
}
else if(heart_1-heart_1_init >= 15 && heart_1-heart_1_init < 20){
    var color_1 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
}
else if(heart_1-heart_1_init >= 20){
    var color_1 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
}

if(heart_2 >= 0 && heart_2-heart_2_init < 5){
    var color_2 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
}
else if(heart_2-heart_2_init >= 5 && heart_2-heart_2_init < 10){
    var color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
}
else if(heart_2-heart_2_init >= 10 && heart_2-heart_2_init < 15){
    var color_2 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
}
else if(heart_2-heart_2_init >= 15 && heart_2-heart_2_init < 20){
    var color_2 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
}
else if(heart_2-heart_2_init >= 20){
    var color_2 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
}

async function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    },ms);
  });
}
  console.log(json[3].Start);
//if(json[3].Start == 2){
  Light_Change();//}

function Light_Change(){
  console.log('aaa');
    Cylon.robot({
        connections: {
            hue: { adaptor: 'hue', host: host, username: username }
        },

        devices: {
            bulb_1: { driver: 'hue-light', lightId: lightid_1 }, bulb_2: { driver: 'hue-light', lightId: lightid_2 }
        },

        work: async function(my) {
            if(turnlight == 1){
                // brightnessを先に指定しないと色の設定が無効になる
                //if(json[3].Start == 2){
                //for(;;){
                  json = require('../public/data/data.json');
                  console.log(json[1].HeartBeat);

                  //if(json[3].Start == 2){
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
                    heart_1_init = json[0].init,
                    heart_2_init = json[1].init,
                    heart_1 = json[0].HeartBeat,
                    heart_2 = json[1].HeartBeat;

                    my.bulb_1.brightness(color_1.brightness);

                    my.bulb_1.rgb(color_1.red, color_1.green, color_1.blue);

                      // brightnessを先に指定しないと色の設定が無効になる
                    my.bulb_2.brightness( color_2.brightness );

                    my.bulb_2.rgb(color_2.red, color_2.green, color_2.blue);

                    my.bulb_1.turnOn();

                    my.bulb_2.turnOn();

                    if(heart_1 >= 0 && heart_1-heart_1_init < 5){
                        color_1 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 5 && heart_1-heart_1_init < 10){
                        color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 10 && heart_1-heart_1_init < 15){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 15 && heart_1-heart_1_init < 20){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 20){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
                    }

                    if(heart_2 >= 0 && heart_2-heart_2_init < 5){
                        color_2 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 5 && heart_2-heart_2_init < 10){
                        color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 10 && heart_2-heart_2_init < 15){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 15 && heart_2-heart_2_init < 20){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 20){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
                    }

                    await sleep(2000);

                    my.bulb_1.brightness(color_1.brightness);

                    my.bulb_1.rgb(color_1.red, color_1.green, color_1.blue);

                      // brightnessを先に指定しないと色の設定が無効になる
                    my.bulb_2.brightness( color_2.brightness );

                    my.bulb_2.rgb(color_2.red, color_2.green, color_2.blue);

                    my.bulb_1.turnOn();

                    my.bulb_2.turnOn();

                    if(heart_1 >= 0 && heart_1-heart_1_init < 5){
                        color_1 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 5 && heart_1-heart_1_init < 10){
                        color_1 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 10 && heart_1-heart_1_init < 15){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 15 && heart_1-heart_1_init < 20){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
                    }
                    else if(heart_1-heart_1_init >= 20){
                        color_1 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
                    }

                    if(heart_2 >= 0 && heart_2-heart_2_init < 5){
                        color_2 = JSON.parse('{"red":'+0+',"green":'+0+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 5 && heart_2-heart_2_init < 10){
                        color_2 = JSON.parse('{"red":'+100+',"green":'+149+',"blue":'+237+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 10 && heart_2-heart_2_init < 15){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+255+',"blue":'+255+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 15 && heart_2-heart_2_init < 20){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+20+',"blue":'+147+',"brightness":100}');
                    }
                    else if(heart_2-heart_2_init >= 20){
                        color_2 = JSON.parse('{"red":'+255+',"green":'+0+',"blue":'+0+',"brightness":100}');
                    }

                //}
                await sleep(2000);
            //}
          //}
        }
            else{
                my.bulb_1.turnOff();
                my.bulb_2.turnOff();
                console.log('turnOff()');
            }


      }
    }).start();
};
