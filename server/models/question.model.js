const mongoose = require('mongoose');

const Question = mongoose.Schema({
    id: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    input: { type: String, require: true },
    output: { type: String, require: true },
    createdOn: { type: Date, require: Date.now }
});

module.exports = mongoose.model('question', Question);
