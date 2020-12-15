const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

router.post('/register', async (req, res) => {
    try {
        const { email, password, passwordCheck, displayName } = req.body
        //validation
        if (!email || !password || !passwordCheck)
            return res.status(400).json({ msg: "NOt all fields have been entered" })
        if (password.length < 5)
            return res
                .status(400)
                .json({ msg: "The password need to be at least 5 character long" })
        if (password !== passwordCheck)
            return res
                .status(400)
                .json({ msg: "Enter the same password twice for verification" })
        const existingUser = await User.findOne({ email: email })
        if (existingUser)
            return res
                .status(400)
                .json({ msg: "An account with this email already exists" })
        // if (!displayName) displayName = email

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        })

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered" })
        const user = await User.findOne({ email: email })
        if (!user)
            return res
                .status(400)
                .json({ msg: "No account with this emaill has been registered" })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials" })

        const token = jwt.sign({ id: user._id }, "!26u*f@Ny9[L9Y^.")
        res.status(200).json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email
            }
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router 
