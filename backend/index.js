const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 8081

const userDetailRouter = require('./routes/spa-user-router')
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('api')
})

app.use('/api', userDetailRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))