const Game = require("../models/Game.js")
const mongoose = require("mongoose")
const axios = require("axios")

//User Game Fetch
// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=DD97B0F0FF4FFDF40050336C440293F1&steamid=76561198406950097&format=jsonw
//App data fetch 
// http://store.steampowered.com/api/appdetails?appids=1150690

async function gameSeed() {
    mongoose.connect("mongodb://127.0.0.1/final-project", {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    const initialResult = await axios.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=7529AC9F6EEF62D65575AA85CCA6C879&steamid=76561198406950097&format=json")
    const gameArr = await Promise.all(initialResult.data.response.games.map(async (game) => {
        const appId =  game.appid
        try {
            console.log("working on game:" + appId)
            const gameData = (await axios.get("http://store.steampowered.com/api/appdetails?appids=" + appId))["data"][appId].data
            return await new Game({
                description: gameData.short_description,
                title: gameData.name,
                average_score: gameData.metacritic.score / 10,
                year: gameData.release_date.date,
                art: gameData.header_image
            })
        } catch (error) {
            console.log("error generating info for game:" + appId)
            console.log(error)
        }
    }))
    const finalArr = gameArr.filter((game) => game !== undefined)
    await Game.bulkSave(finalArr)
    
} 
gameSeed()



