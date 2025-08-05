const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("This is Home Page");
  console.log("This is home page");
});

app;
app.listen(5000, () => {});
