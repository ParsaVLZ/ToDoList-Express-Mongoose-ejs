const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    status: {
        type: String,
        enum: ['in-progress', 'canceled', 'done'],
        default: 'in-progress'
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;