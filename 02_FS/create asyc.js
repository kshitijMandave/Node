const fs = require("fs"); // importing the fs module

// using the writeFile method to create a file

// writeFile takes three arguments: file name, content, and a callback function
fs.writeFile("test.txt", "Hello, Kshitij! How are you??", (err) => {
  if (err) {
    console.log("something went wrong");
  } else {
    console.log("file created successfully!");
  }
});
