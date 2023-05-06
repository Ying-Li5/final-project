const express = require("express");
const router = express.Router();

const gameController = require("./controllers/gameController")
const reviewController = require("./controllers/reviewController")
const userController = require("./controllers/userController")

router.use("/game", gameController)
router.use("/user", userController)
router.use("/review", reviewController)

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;