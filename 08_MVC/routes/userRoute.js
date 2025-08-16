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
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdaeUserById)
  .delete(handleDeleteUserById);

// exporting the router
module.exports = router;
