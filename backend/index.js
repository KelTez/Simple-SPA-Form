const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const bodyParser = require("body-parser")

const apiPort = 8080

const userDetailRouter = require('./routes/spa-user-router')
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(process.cwd()+"../simple-spa-form/build/"));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('api')
})

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"../simple-spa-form/build/index.html");
});

app.use('/api', userDetailRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))