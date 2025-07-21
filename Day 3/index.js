const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From about page");
});

app.listen(7920, () => {
  console.log("server started on port number");
});
