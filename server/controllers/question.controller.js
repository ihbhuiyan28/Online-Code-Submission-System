const { v4: uuidv4 } = require('uuid');

const Question = require('../models/question.model');

const getAllQuestion = async (req, res) => {
    try {
        const question = await Question.find();
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneQuestion = async (req, res) => {
    try {
        const question = await Question.findOne({ id: req.params.id });
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json(err);
    }
}

const insertQuestion = async (req, res) => {
    try {
        const question = new Question({
            id: uuidv4().substring(0, 8),
            title: req.body.title,
            description: req.body.description,
            input: req.body.input,
            output: req.body.output
        });
        await question.save();
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteQuestion = async (req, res) => {
    try {
        await Question.deleteOne({ id: req.params.id });
        res.status(200).json({ message: 'Question Deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllQuestion,
    getOneQuestion,
    insertQuestion,
    deleteQuestion
}
