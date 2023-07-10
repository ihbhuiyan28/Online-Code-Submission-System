const cors = require('cors');
const express = require('express');

const answerRouter = require('./routes/answer.route');
const questionRouter = require('./routes/question.route');

const app = express();

require('./config/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/answer', answerRouter);
app.use('/api/question', questionRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is Connected!'
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route Error!'
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Server Error!'
    });
});

module.exports = app;
