const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

// MIDDLEWARE
app.use(express.json())

app.use(cors())

const gameController = require("./controllers/gameController")
const reviewController = require("./controllers/reviewController")
const userController = require("./controllers/userController")

app.use("/game", gameController)
app.use("/user", reviewController)
app.use("/review", userController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    // mongo set up info
    console.log(`Example app listening on port ${port}`)
})