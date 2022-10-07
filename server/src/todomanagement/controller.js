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

module.exports = {
    addTask
}