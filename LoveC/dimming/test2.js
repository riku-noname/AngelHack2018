var host = '192.168.11.4',
    username = 'ywwCNrGvMqwrbAvfXvbmQEKBllXc2yZxrYnlUWcw',
    flag = 1;

//hue ID:2
var lightid_1 = 2,
    turnlight = 1,
    heart_1_init = 0,
    heart_2_init = 0;

//hue ID:3
var lightid_2 = 3;
  //  color_2 = JSON.parse('{"red":0,"green":0,"blue":255,"brightness":100}'
for(var i= 1;i<20;i++){
  const json = require('../public/data/data.json');
        console.log(json);
  sleep(1);
}

function sleep(t){

    var t1 = new Date().getTime();
    var t2 = new Date().getTime();

    while( t2 < t1 + 1000 * t ){

        t2 = new Date().getTime();

    }

    return;
}
