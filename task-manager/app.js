const express = require('express')

const app = express();

app.get('/hello', (req, res) => {
    res.send("hello this is me")
})

app.listen(3004, () => {
    console.log('listening to port 3004')
})