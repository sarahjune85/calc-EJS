const express = require("express");
// const bodyParser = require("body-parser"); deprecated express v8+! see below.

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

//app initalizing - callback posts to website, home route:
app.get("/", function (request, callback) {
  //path to current file dir:
  callback.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, callback) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;

  callback.send("Calculating..." + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
