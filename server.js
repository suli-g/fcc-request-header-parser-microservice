// set up app to use expressjs
const express = require('express');
const app = express();
//respond to all
app.use("*", (req, res)=>{
  let head = req.headers;
  let ip = head["x-forwarded-for"].split(",")[0];
  let os_ = head["user-agent"];
  let os=os_.substring(os_.indexOf("(")+1, os_.indexOf(")"));
  let lang = head["accept-language"].replace(/[\,\;]/g, " ").split(" ")[0];
  res.set("content-type", "application/json");
  let data = JSON.stringify({"ip":ip, "language": lang, os:os});
  res.send(data)
  res.end();
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
