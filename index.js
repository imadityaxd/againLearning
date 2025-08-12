//import express from "express"
const express = require('express') 
require('dotenv').config();
const data = require('./data.js')
//stroing value of express() in variable
const app = express()

//assiging port to run the server
const port = process.env.PORT

//on port:3000 and home route(/) , it will display hello world 
app.get('/', (req,res) => {
    res.send('Hello, World!')
})

// listening on /twitter on localhost:3000
app.get('/twitter',(req,res) => {
    res.send("Twitter")
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>chai aur code</h2>')
})
app.get('/github', (req,res) => {
    res.json(data);
})

app.listen(process.env.PORT,() => {
    console.log(`App listening on port: ${port}`)
})