

const getAllTasks = (req, res) => {
    res.send('all items from the controller')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
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