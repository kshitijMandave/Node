const express = require("express");
const { connectToMongoDB } = require("./connectDB");
const urlRoute = require("./routes/urlRouter");

const app = express();
const PORT = 8001;

// Middleware to parse JSON & form-data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("Mongo DB Connected Successfully"))
  .catch((error) => console.log("Something wrong while connecting DB", error));

// Routes
app.use("/url", urlRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
