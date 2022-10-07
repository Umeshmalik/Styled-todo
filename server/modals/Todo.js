const {Schema, default: mongoose} = require('mongoose');

const TodoSchema = new Schema({
    id: String,
    title: String,
    status: Boolean,
    createdAt: Date,
    deletedAt: Date
}, {
    timestamps: true,
    collation: "todo"
})

module.exports = mongoose.model("todo", TodoSchema);