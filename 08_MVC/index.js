// importing Express
const express = require("express");
const { connectDB } = require("./connection");

const { logReqRes } = require("./middlewares/index");

const userRouter = require("./routes/userRoute");

// creating express app
const app = express();
// constant PORT
const PORT = 3600;

// connection
connectDB("mongodb://127.0.0.1:27017/practice-db");

// Middleware
app.use(express.json()); // ✅ Added for JSON support
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});

/* Now we can see how our code looking, here we are just deciding the flow  */
