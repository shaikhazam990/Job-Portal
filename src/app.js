const express = require("express")
const cookieparser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieparser)
app.use(express.urlencoded({extended:true}))
app.use(cors())

module.exports = app