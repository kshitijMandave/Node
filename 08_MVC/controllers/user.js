const User = require("../models/user");

async function handleGetAllUsers() {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

module.exports = {
  handleGetAllUsers,
};
