const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    id: { type: Number },
    author: { type: String },
    score: { type: Number },
    game_id: { type: Number },
    title: { type: String },
    content: { type: String },
}) 

const Review = mongoose.model("Review", ReviewSchema)

module.exports = Review;