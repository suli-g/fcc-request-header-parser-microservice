// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
app.all("", (req, res)=>{
  let head = req.headers;
  let os_ = head["accept-language"];
  let ip = req.ip;
  let platform=head["user-agent"]; 
  let lang = os_.substr(os_.indexOf("("), os_.indexOf(";"));
  res.set("content-type", "application/json");
  let data = JSON.stringify({"ip":ip, "language": lang, os:platform});
  res.send(data)
  res.end();
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
