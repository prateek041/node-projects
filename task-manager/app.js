const express = require('express');
const tasks = require('./routes/tasks')
const app = express();

const port = 3004;

// middleware

app.use(express.json()) // for incoming requests

app.get('/hello', (req, res) => {
    res.send("hello this is me")
})

app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
    console.log('listening to port 3004')
})