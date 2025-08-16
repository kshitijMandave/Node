// importing All the required Packages/ Modules
const express = require("express");
const { connectDB } = require("./connection");

const { logReqRes } = require("./middlewares/index");

const userRouter = require("./routes/userRoute");

// creating express app
const app = express();
// constant PORT
const PORT = 3600;

// Step 1 : connection with MongoDB
connectDB("mongodb://127.0.0.1:27017/practice-db")
  .then(() => {
    console.log("MongoDB Connectet Successfully!");
  })
  .catch((error) => {
    console.error("Something Wrong while Connecting the MongoDB");
  });

// Step 2 : Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt")); // ✅ Added for logging requests and responses

// Step 3 : Routes
// Here we are using the userRouter which contains all the user related routes
// means if any request comes to /api/users then it will be handled by userRouter
app.use("/api/users", userRouter); // whenever any request comes to /api/users, it will be handled by userRouter

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});

/* Now we can see how our code looking, here we are just deciding the flow  */
