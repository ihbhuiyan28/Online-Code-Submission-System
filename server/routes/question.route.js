const express = require('express');
const router = express.Router();

const {
    getAllQuestion,
    getOneQuestion,
    insertQuestion,
    deleteQuestion
} = require('../controllers/question.controller');

router.get('/', getAllQuestion);
router.get('/:id', getOneQuestion)
router.post('/', insertQuestion);
router.delete('/:id', deleteQuestion);

module.exports = router;
