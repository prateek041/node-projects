require('./db/connect')
require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express');
const tasks = require('./routes/tasks')
const app = express();
const notFound = require('./middleware/not-foud')
const errorHandlerMiddleware = require('./middleware/error-handler')

const port = 3004;

// middleware

app.use(express.static('./public'))

app.use(express.json()) // for incoming requests

// app.get('/hello', (req, res) => {
//     res.send("hello this is me")
// })

// routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)

app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log('listening to port 3004')
        })
    } catch (error) {
        console.log(error)
    }
}

start()