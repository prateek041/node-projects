const express = require('express')
require('dotenv').config()

const app = express()

const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/errorHandler')

// middlewares

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('Hello to the store API');
})

// invoking middleware
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 4000
const start = async () => {
    try {
        // connect to the DB.
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listening to port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()