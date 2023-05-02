const express = require("express");
const router = express.Router();
const reviewService = require('../services/reviewService.js')

router.get("/:review_id", async function (req, res) {
    const result = await reviewService.getReviewByReviewId(req.params.review_id)
    res.status(200).json(result)
});

router.get("/game/:game_id", async function (req, res) {
    const result = await reviewService.getReviewByGameId(req.params.game_id)
    console.log("at the get")
    console.log(result)
    res.status(200).json(result)
});

router.post("/", function (req, res) {
    res.send("POST - Create Review");
});

router.get("/:game_id", function (req, res) {
    res.send("GET - Get the reviews for a given game")
});



module.exports = router;