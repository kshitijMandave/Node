// here we hae created some functions which are using User model to interact with the database
// Model where we craeetd the schema for user
const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

async function handlegetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdaeUserById(req, res) {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body, // update with request body
    { new: true } // return updated user
  );

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ status: "Success", data: updatedUser });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
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

  return res.status(201).json({ status: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdaeUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
