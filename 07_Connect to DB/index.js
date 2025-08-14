// importing Express
const express = require("express");

// importing File System
const fs = require("fs");

// importing Mongoose
const mongoose = require("mongoose");

// importing data.json
const { type } = require("os");

// creating express app
const app = express();

// constant PORT
const PORT = 3600;

// connection
mongoose
  .connect("mongodb://127.0.0.1:27017/practice-db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

// Middleware
app.use(express.json()); // ✅ Added for JSON support
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  const html = `
  <ul>
      ${allUsers
        .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
        .join("")}
  </ul>`;
  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;

    if (!body || !body.first_name || !body.email || !body.password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password,
      jobTitle: body.jobTitle,
      gender: body.gender,
    });

    console.log("Result:", result);
    return res.status(201).json({ status: "success", data: result });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server error", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
