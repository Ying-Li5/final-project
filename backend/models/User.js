const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: Number },
    username: { type: String },
    password_: { type: String },
    name: { type: String },
})

const User = mongoose.model("User", UserSchema)

module.exports = User;