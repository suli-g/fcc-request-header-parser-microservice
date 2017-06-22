// server.js
// where your node app starts

// init project
const os = require('useragent');
const express = require('express');
const app = express();
app.all("", (req, res)=>{
  let ip = req.ip;
  let platform=os.platform; 
  let lang;
  res.set("content-type", "application/json");
  let data = JSON.stringify({"ip":ip, "language": lang, os:platform});
  res.send(req.headers)
  res.end();
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
