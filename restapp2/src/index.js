
var express = require("express");
var bodyParser = require("body-parser");
var controller = require("./controller");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.route("/sensors/:sensorID/sensordata")
  .get(controller.getSensorInfo);

app.route("/")
  .get(controller.hello);


// Server
let server = app.listen(3000, function() {
    console.log("Mock Server running on port 3000");
});