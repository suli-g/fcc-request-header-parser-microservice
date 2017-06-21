// server.js
// where your node app starts

// init project
const os = require('os');
const express = require('express');
const app = express();
app.all("", (req, res)=>{
  res.set("content-type", "application/json");
  let data = JSON.stringify({"ip":0, "language": "en-UK", os:"windows"});
  res.send(data)
  res.end();
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
