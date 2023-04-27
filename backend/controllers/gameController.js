const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("GET - Game Endpoint")
});

router.post("/review", function (req, res) {
  res.send("POST - Update avg review score of game");
});

module.exports = router;