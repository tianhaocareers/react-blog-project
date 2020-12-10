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

router.post("/", async (req, res) => {
    const posts = new Post(req.body)
    try {
        await posts.save()
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(400).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            return res.status(404).json()
        }
        res.json(post)
    } catch (e) {
        res.status(500).json()
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!post) return res.status(404).json()
        res.send(post)
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router;