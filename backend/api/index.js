const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const mongoose = require('mongoose')

// MIDDLEWARE
app.use(express.json())

app.use(cors())

const indexRouter = require("../index.js")

app.use("/", indexRouter)

mongoose.connect("mongodb+srv://yingli:Welcome1@game-library.quo9kgy.mongodb.net/", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;