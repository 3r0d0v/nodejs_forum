const express = require("express")
const pug = require("pug")
const fs = require("fs")
const bodyParser = require("body-parser")

// partials
const app = express()
const port = process.env.PORTe || 3000

// setting view engine
app.set("view-engine","pug")

// compulsons
app.use(bodyParser.urlencoded())
// routes

app.get("/", (req,res,next) => {
    res.render('index',{title:"Hey",message:"This is message"})
})

// listening to the server
app.listen(port, (arg) => {
    console.log(`The server started successfuly at port ${port}`)
})