const mongoose = require('mongoose');

const Answer = mongoose.Schema({
    id: { type: String, require: true },
    fullname: { type: String, require: true },
    registration: { type: String, require: true },
    questionId: { type: String, require: true },
    sourceCode: { type: String, require: true },
    createdOn: { type: Date, require: Date.now }
});

module.exports = mongoose.model('answer', Answer);
