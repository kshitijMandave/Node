const fs = require("fs");
fs.readFile("./test.txt", "utf8", (err, result) => {
  if (err) {
    console.log("something went wrong", err);
  } else {
    console.log(result);
  }
});
