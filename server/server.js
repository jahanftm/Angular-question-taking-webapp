const express = require('express');
const cors = require('cors');
const quiz = require('./quiz');
const answers = require('./answers');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/quiz', ( req, res ) => {
  setTimeout(() => {
    res.status(201).send(
      quiz[ Math.floor(Math.random() * quiz.length) ]
    );
  }, 600);
});

app.post('/answer', ( req, res ) => {

  const {questionId, answerIndex} = req.body;
  const badRequest = req.query.br;

  setTimeout(() => {
    if (badRequest) {
      res.status(400).send();
    } else {
      const userAnswer = answers.find(answer => answer.questionId === questionId && answer.answerIndex === answerIndex);
      const isCorrect = !!userAnswer;
      res.status(201).send({
        isCorrect,
        message: 'SUCCESS'
      });
    }
  }, 1000);
});

app.listen(9000);
