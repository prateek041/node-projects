const mongoose = require('mongoose');


// To structure the 'documents' in MongoDB
const TaskSchema = new mongoose.Schema({
    // additional properties are the basic validators for out schema
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)