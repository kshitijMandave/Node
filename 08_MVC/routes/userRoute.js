const express = require("express");

const {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdaeUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

// Routes
// means if any get request comes to /api/users then it will be handled by handleGetAllUsers,
// and for post request it will be handled by handleCreateNewUser.
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// For specific user operations, we use the user ID in the URL
router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdaeUserById)
  .delete(handleDeleteUserById);

// and all these functions we are getting from controllers/user.js file

// exporting the router
module.exports = router;
