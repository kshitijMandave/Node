// importing Express
const express = require("express");

// importing data.json
const users = require("./data.json");

// creating express app
const app = express();

// constant PORT
const PORT = 3600;

// Routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// For Dynamic data with id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  //TODO: Create New User
  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  //TODO: Edit the User with ID.
  return res.json({ status: "pending" });
});

app.delete("/api/user/:id", (req, res) => {
  //TODO: Delete the user with ID.
  return res.json({ status: "pending" });
});

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
