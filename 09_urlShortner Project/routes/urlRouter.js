const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirect,
} = require("../controllers/url");

const router = express.Router();

// POST → Generate short URL
router.post("/", handleGenerateNewShortURL);

// GET → Redirect to original URL
router.get("/:shortId", handleRedirect);

module.exports = router;
