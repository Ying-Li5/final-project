const express = require("express");
const router = express.Router();
const gameService = require('../services/gameService.js')

router.get("/", async function (req, res) {
  console.log("did we get here")
  const result = await gameService.getGames()
  res.status(200).json(result)
});

router.post("/review", function (req, res) {
  res.send("POST - Update avg review score of game");
});

module.exports = router;