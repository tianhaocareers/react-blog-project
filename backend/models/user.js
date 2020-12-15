const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    email: { type: String, required: true, unique },
    password: { type: String, required: true, unique },
    displayName: { type: String }
})

module.exports = User = mongoose.model("user", userModel)