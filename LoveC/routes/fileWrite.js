var fs = require('fs');
var path = require('path');

var config = JSON.parse(
  fs.readFileSync(
    path.resolve( __dirname , "data.json" ) 
  )
);

var env = process.argv[2];

if (env == "release") {
  config.debug = false;
} else {
  config.debug = true;
}

fs.writeFileSync(
  path.resolve( __dirname , "config.json" ),
  JSON.stringify(config,null,'  '),
  "utf-8"
);
