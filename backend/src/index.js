// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// simple database
// TODO: 06/30/20 - connect to a real database instead of an array
const questions = [];

// app security w/Helmet
app.use(helmet());

// parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all questions
app.get('/', (req, res) => {
    const qs = questions.map(q => ({
        id: q.id
        title: q.title,
	description: q.description,
	answers: q.answers.length,
    }));
    res.send(qs);
});

// get a specific question
app.get('/:id', (req, res) => {
    const question = questions.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();

