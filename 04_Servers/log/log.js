// importing the http module
const http = require("http");

// importing fs module
const fs = require("fs");

//Constant PORT where we listen all our request
const PORT = 3500;

let reqCount = 0;

// creating server using createServer function
const myServer = http.createServer((req, res) => {
  reqCount++;
  console.log(`Request Recived ${reqCount}`);
  const log = `${Date.now()}: ${req.url} New Request Received ${reqCount} \n `;
  fs.appendFile("test.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is Home Page");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      case "/contact":
        res.end("This is Contact Page");
        break;
      case "/cart":
        res.end("This is Cart Page");
        break;
    }
  });
});

// here we are listening the server on PORT
// our URL will be = http:/localhost/3500
myServer.listen(PORT, () => {
  console.log(`server Started at :http:/localhost/${PORT}`);
});
