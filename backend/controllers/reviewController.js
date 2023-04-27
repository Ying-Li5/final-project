const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("GET - Review Endpoint")
});

router.post("/", function (req, res) {
    res.send("POST - Create Review");
});

router.get("/:game_id", function (req, res) {
    res.send("GET - Get the reviews for a given game")
});

module.exports = router;