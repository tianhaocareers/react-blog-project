const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
console.log("Starting server")
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

//set up routes
app.use('/posts', require("./routes/postRoutes"))

//set up mongoose
console.log("Connecting to MongoDB")
mongoose.connect("mongodb://127.0.0.1:27017/react-blog-project", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established")
})