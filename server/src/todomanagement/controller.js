const nanoid = require('uuid')

const Todo = require("../../modals/Todo")

const addTask = async (req, res) => {
    try {
        const { task } = req.body;
        const data = await Todo.create({
            id: nanoid.v4(),
            title: task,
            status: false,
            createdAt: new Date()
        })
        return res.status(201).json({ message: "true", data })
    } catch (err) {
        throw new Error(err);
    }
}

const getTasks = async (req, res) => {
    try{
        const tasks = await Todo.find()
        return res.status(200).json(tasks)
    }catch(err){
        throw new Error(err);
    }
}

const deleteAll = async (req, res) => {
    try{
        const tasks = await Todo.deleteMany()
        return res.status(200).json(tasks)
    }catch(err){
        throw new Error(err);
    }
}

const updateStatus = async (req, res) => {
    try{
        const {status, taskId} = req.body;
        const tasks = await Todo.updateOne({taskId}, {$set: {status}})
        return res.status(200).json(tasks)
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    addTask,
    getTasks,
    deleteAll,
    updateStatus
}