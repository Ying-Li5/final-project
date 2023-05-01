// Game logic
const data = require("../data/data")
const getGames = () => {
    return data.game_arr
}

module.exports = {
    getGames: getGames
}