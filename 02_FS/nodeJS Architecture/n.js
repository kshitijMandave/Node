const fs = require("fs");
setTimeout(() => {
  console.log("Hi, I'm Timeout");
}, 0);

setImmediate(() => {
  console.log("I'm setImmediate");
});

console.log("I'm Third line");
