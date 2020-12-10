const router = require("express").Router()
const Post = require("../models/postModel")

router.post('/', async (req, res) => {
    //retrieve data from request
    const { title, createAt, tags, html } = req.body
    console.log(title, createAt, tags, html)

    //construct the post Model
    const newPost = new Post({
        title,
        // createAt, 
        // tags,
        // html
    })
    //save post model
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
        console.log(savedPost)
    }
    catch (err) {
        console.error(err)
    }
})

router.get("/", async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
})

router.get("/", async (req, res) => {
    const posts = await Post.findById(req.params.id)
    res.json(posts)
})

module.exports = router;