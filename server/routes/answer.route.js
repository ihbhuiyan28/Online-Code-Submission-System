const express = require('express');
const router = express.Router();

const {
    getAllAnswer,
    getOneAnswer,
    insertAnswer,
    deleteAnswer
} = require('../controllers/answer.controller');

router.get('/', getAllAnswer);
router.get('/:id', getOneAnswer);
router.post('/', insertAnswer);
router.delete('/:id', deleteAnswer);

module.exports = router;
