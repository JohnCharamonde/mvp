const express = require('express');
const databaseControllers = require('../database/controllers/question.js');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));

const PORT = 8000;

// Create
app.post('/api/questions', (req, res) => {
  databaseControllers.createQuestion(req.body, (error, result) => {
    if (error) {
      console.log('ERROR! Unable to insert the question into the database!', error);
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  })
});

// Read
app.get('/api/questions', (req, res) => {
  databaseControllers.readQuestions((error, result) => {
    if (error) {
      console.log('ERROR! Unable to update the question!', error);
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
  })
});

// Update
app.put('/api/questions', (req, res) => {
  databaseControllers.updateQuestion(req.body._id, req.body.questionObj, (error, result) => {
    if (error) {
      console.log('ERROR! Unable to update the question!', error);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
});

// Delete
app.delete('/api/questions', (req, res) => {
  databaseControllers.deleteQuestion(req.body._id, (error, result) => {
    if (error) {
      console.log('ERROR! Unable to delete the question from the database!', error);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});