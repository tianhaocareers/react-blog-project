const user = require("../models/user")
const router = require("expres").Router()
const User = require("../models/user")

router.posts('/register', async (req, res) => {
    try {
        const { email, password, passowrdCheck } = req.body

        if (!email || !password || !passowrdCheck)
            return res.status(400).json({ msg: "NOt all fields have been entered" })
        if (password.length < 5)
            return res
                .status(400)
                .json({ msg: "The password need to be at least 5 character long" })
        if (password !== passowrdCheck)
            return res
                .status(400)
                .json({ msg: "Enter the same password twice for verification" })
        const existingUser = await user.findOne({ email: email })
        if (existingUser)
            return res
                .status(400)
                .json({ msg: "An account with this email already exists" })
        if (!displayName) displayName = email

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        })

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (e) {
        res.status(500).json({ error: err })
    }

})

module.exports = router 
