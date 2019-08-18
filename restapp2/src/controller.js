"use strict";

module.exports.getSensorInfo = function(request,response) {
    console.log("getSensorInfo.parm:\n" + JSON.stringify(request.parms,null,2));
    console.log("getSensorInfo.query:\n" + JSON.stringify(request.query,null,2));
    let sensorID = request.params.sensorID;
    let serviceResponse = {
        sensorID: 'sensor',
        temperature: 72.99,
        humidity: 83.11
    }
    response.status(200).send(JSON.stringify(serviceResponse,null,2));
}

module.exports.hello = function(request,response) {
    response.status(200).send("Hello!");
}