const Game = require("../models/Game.js")

const game = new Game({
    id: 1,
    description: "This is the first game",
    average_score: 10,
    title: "Risk of Rain",
    year: 2018
})

const game2 = new Game({
    id: 2,
    description: "This is the second game",
    average_score: 10,
    title: "Lobotomy Corporation",
    year: 2014
})

const game_arr = [ game, game2]

module.exports = {
    game_arr
}