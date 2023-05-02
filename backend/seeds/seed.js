const Game = require("../models/Game.js")
const Review = require("../models/Review.js")
const User = require("../models/User.js")
const mongoose = require("mongoose")

async function seed() {
  mongoose.connect("mongodb://127.0.0.1/final-project", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  
  const game = await new Game({
      description: "This is the first game",
      average_score: 10,
      title: "Risk of Rain",
      year: 2018,
      art: "https://upload.wikimedia.org/wikipedia/en/c/c1/Risk_of_Rain_2.jpg"
  }).save()
  
  const game2 = await new Game({
      description: "This is the second game",
      average_score: 10,
      title: "Lobotomy Corporation",
      year: 2014,
      art: "https://static-cdn.jtvnw.net/ttv-boxart/457724187_IGDB-272x380.jpg"
  }).save()

  const game3 = await new Game({
    description: "This is the third game",
    average_score: 9,
    title: "Resident Evil 2",
    year: 2019,
    art: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/220px-Resident_Evil_2_Remake.jpg"
  }).save()

const game4 = await new Game({
  description: "This is the fourth game",
  average_score: 7,
  title: "No Man's Sky",
  year: 2016,
  art: "https://upload.wikimedia.org/wikipedia/en/6/67/No_Man%27s_Sky.jpg"
}).save()

const game5 = await new Game({
  description: "This is the fifth game",
  average_score: 10,
  title: "God of War Ragnarok",
  year: 2023,
  art: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
}).save()
  
  const user = await new User({
    username: "htoomin",
    password: "Welcome1",
    name: "Htoo Min"
  }).save()
  
  const user2 = await new User({
    username: "yingli",
    password: "Welcome1",
    name: "Ying Li"
  }).save()
  
  const review = await new Review({
    author_id: user._id.toString(),
    score: 4,
    game_id: game2._id.toString(),
    title: "This game made my life harder",
    content: "Why would anyone play a game like this ever in their life. The game just gets harder and harder! It has invaded my nightmares at this point"
  }).save()

  const review1 = await new Review({
    author_id: user._id.toString(),
    score: 8,
    game_id: game2._id.toString(),
    title: "This game made my life harder...I love it!",
    content: "Peh"
  }).save()

  const review2 = await new Review({
    author_id: user._id.toString(),
    score: 5,
    game_id: game2._id.toString(),
    title: "Easier than a fulltime Job",
    content: "It's like having a fulltime job! I worry about it constantly and can't sleep at night"
  }).save()

  const review3 = await new Review({
    author_id: user._id.toString(),
    score: 4,
    game_id: game2._id.toString(),
    title: "Ying hates it i love it",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }).save()
}

seed()



