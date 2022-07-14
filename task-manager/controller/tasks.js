const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('all items from the controller')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
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