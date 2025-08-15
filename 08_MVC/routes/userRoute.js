const express = require("express");

const { handleGetAllUsers } = require("../controllers/user");

const router = express.Router();

// Routes
router.get("/", handleGetAllUsers);

router
  .route("/:id")
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

router.post("/", async (req, res) => {
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

// exporting the router
module.exports = router;
