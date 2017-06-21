// server.js
// where your node app starts

// init project
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.all("", (req, res)=>{
  let ip = req.ip;
  let platform=os.platform; 
  let lang=os.;
  res.set("content-type", "application/json");
  let data = JSON.stringify({"ip":ip, "language": lang, os:platform});
  res.send(data)
  res.end();
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
