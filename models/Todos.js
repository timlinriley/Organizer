const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item: {type: String, required: true},
    priority: {type: String, required: true},
    completed: {type: boolean, default: false}
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;