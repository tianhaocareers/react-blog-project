const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

//set mongoose
mongoose.connect(;)