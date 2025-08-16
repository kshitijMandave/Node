const shortid = require("shortid");
const URL = require("../models/url");

// Generate new short URL
async function handleGenerateNewShortURL(req, res) {
  try {
    console.log("REQ BODY 👉", req.body);

    const body = req.body;
    if (!body.url) {
      return res.status(400).json({ error: "url is required" });
    }

    const shortID = shortid();

    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (err) {
    console.error("Error generating short URL:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Redirect to original URL
async function handleRedirect(req, res) {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Error redirecting:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { handleGenerateNewShortURL, handleRedirect };
