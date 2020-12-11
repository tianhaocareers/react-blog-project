const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String }
})

module.exports = Post = mongoose.model("post", postSchema)