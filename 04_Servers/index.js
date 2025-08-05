// importing http module to create server
const http = require("http");

// here we are defining a constant PORT which will be used to listen for incoming requests.
const PORT = 5000;

// here we are creating Web server with createServer method. and storing into the variable.
// to handle the incoming request we need handlers. so we need to pass Request Listener callback function to the createServer method, Which has two objects (req, res) whenever request will come create server will call handler, in the first argument it will take all the information of requester.like who's requester, ip address and all, and we can send the response with res object.
const myServer = http.createServer((req, res) => {
  console.log("New req Rec.");

  // res means response, we can send the response to the requester with this object.
  res.end("THis is Home Page");
});

// here we are listening to the server on PORT 5000,
// PORT : it's a number where server will listen for incoming requests. one server can run on one port at a time.
// and when server is started it will call the callback function and print the message in console.
myServer.listen(PORT, () => {
  console.log(`serverStartetd at port : ${PORT}`);
});
