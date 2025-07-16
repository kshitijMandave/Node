// whenever we want to import any module we use require() function,, fs module allows us to interact with the file system, like: Reading files, Writing files, Creating or deleting directories, Watching file changes

const fs = require("fs");

// here we avre creating file with Syncronous function
// fs.writeFileSync("wirteFileSync.txt", "I'm created with writeFileSync");

// here we avre creating file with Asyncronous function
fs.writeFile("writeFile.txt", "I'm created with writeFunction ", (err) => {
  if (err) {
    console.log("Something went wrong", err);
  } else {
    console.log("File created successfully");
  }
});
