// importing http module to create server
const http = require("http");

//Constant PORT ehere we will listen all the upcoming request.
const PORT = 5000;

// here http helping us to create server with createServer() function it will take two parameters (req, res)
const myStar = http.createServer((req, res) => {
  const user = { name: "Kshitij" };
  console.log("new req recived");
  console.log(req);
  res.end(JSON.stringify(user));
});
// req: it's object where we can find all the info about requwst.
// res: it's object, with we can send response to the user.

// here we are starting server & listening on PORT
myStar.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
