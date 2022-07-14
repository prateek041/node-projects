

const getAllTasks = (req, res) => {
    res.send('all items from the controller')
}

const createTask = (req, res) => {
    res.send('New task created')
}

const getTask = (req, res) => {
    res.send('your single task')
}

const updateTask = (req, res) => {
    res.send('task updatad')
}

const deleteTask = (req, res) => {
    res.send('task deleted')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}