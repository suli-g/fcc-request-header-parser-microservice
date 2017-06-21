// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get('/',  (req, res) => {
  console.log('Accessing the secret section ...');
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
