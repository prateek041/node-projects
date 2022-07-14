const mongoose = require('mongoose');


// To structure the 'documents' in MongoDB
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)