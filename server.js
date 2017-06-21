// server.js
// where your node app starts

// init project
const os = require('os');
const express = require('express');
const app = express();
app.all("", (req, res)=>{
  res.write("Hello, world!");
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
