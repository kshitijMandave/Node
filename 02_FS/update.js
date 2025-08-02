// This code appends "Hey there" to the end of text.txt file
// If the file does not exist, it will be created.
const fs = require("fs");

fs.appendFileSync("./text.txt", "Hey there\n");
