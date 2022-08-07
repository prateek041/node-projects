const express = require('express')
require('dotenv').config()

const app = express()

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/errorHandler')

// middlewares

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('Hello to the store API');
})

// test
app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 4000
const start = async () => {
    try {
        // connect to the DB.
        app.listen(port, console.log(`listening to port {port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()