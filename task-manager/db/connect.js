const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://prateek041:8765Prat@nodeexpressprojects.4qfr9vo.mongodb.net/Task-Manager?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = connectDB