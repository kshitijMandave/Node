const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello form the server again");
});
myServer.listen(8000, () => {
  console.log("Serever Started");
});
