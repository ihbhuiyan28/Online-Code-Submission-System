const { v4: uuidv4 } = require('uuid');

const Answer = require('../models/answer.model');

const getAllAnswer = async (req, res) => {
    try {
        const answer = await Answer.find();
        res.status(200).json(answer);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneAnswer = async (req, res) => {
    try {
        const answer = await Answer.findOne({ id: req.params.id });
        res.status(200).json(answer);
    } catch (err) {
        res.status(500).json(err);
    }
}

const insertAnswer = async (req, res) => {
    try {
        const answer = new Answer({
            id: uuidv4().substring(0, 8),
            fullname: req.body.fullname,
            registration: req.body.registration,
            questionId: req.body.questionId,
            sourceCode: req.body.sourceCode
        });
        await answer.save();
        res.status(201).json(answer);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteAnswer = async (req, res) => {
    try {
        await Answer.deleteOne({ id: req.params.id });
        res.status(200).json({ message: 'Answer Deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllAnswer,
    getOneAnswer,
    insertAnswer,
    deleteAnswer
}
