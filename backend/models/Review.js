const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    author_id: { type: String },
    score: { type: Number },
    game_id: { type: String },
    title: { type: String },
    content: { type: String },
}) 

const Review = mongoose.model("Review", ReviewSchema)

module.exports = Review;