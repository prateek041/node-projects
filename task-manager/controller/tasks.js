const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: "not found" }) // if a task with that id is not found.
        }
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ msg: error }) // some database error
    }
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