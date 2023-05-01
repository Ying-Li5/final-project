const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    id: { type: Number },
    description: { type: String },
    average_score: { type: Number },
    title: { type: String },
    year: { type: Number },
}) 

const Game = mongoose.model("Game", GameSchema)

module.exports = Game;