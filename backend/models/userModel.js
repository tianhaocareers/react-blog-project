const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    displayName: { type: String }
})

module.exports = User = mongoose.model("user", userModel)