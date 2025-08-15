const mongoose = require("mongoose");

// connection
async function connectDB(url) {
  return mongoose.connect(url);
}

module.exports = { connectDB };
