const {Schema, default: mongoose} = require('mongoose');

const TodoSchema = new Schema({
    id: {type: String},
    title:  {type: String},
    status: {type: Boolean},
    createdAt: {type: Date},
    deletedAt: {type: Date},
}, {
    timestamps: true,
    collection: "todo"
})

module.exports = mongoose.model("todo", TodoSchema);