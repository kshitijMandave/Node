// importing Express
const express = require("express");

const fs = require("fs");

// importing data.json
const users = require("./data.json");

// creating express app
const app = express();

// constant PORT
const PORT = 3600;

// Applying Middleware to save form data inside body. This line is a middleware that helps your Express app read form data sent using the HTML <form>.
app.use(express.urlencoded({ extended: false }));

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

// Whenerever our route looks same we can so this things also
// For Dynamic data with id

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //TODO: Edit the User with ID.
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //TODO: Delete the user with ID.
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending", id: users.length });
  });
  // console.log("Body:", body);
  //TODO: Create New User
});

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
