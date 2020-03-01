const express = require('express');
const databaseControllers = require('../database/controllers/question.js');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));

const PORT = 8000;

// QUESTIONS CRUD
// Create
app.post('/api/questions', (req, res) => {
  databaseControllers.insertQuestion(req.body, (error, result) => {
    if (error) {
      console.log('ERROR! Unable to insert question to database!', error);
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  })
});

// Read
// app.get('/api/questions', (req, res) => {
//   getQuestions(req)
//   .then((data)=>{
//     res.json(data)
//   })
//   .catch(
//     res.sendStatus(404)
//   );
// })

// Update
// app.put('/api/questions/:questionId', (req, res) => {
//   updateQuestion(req)
//   .then(()=>{
//     res.sendStatus(200)
//   })
//   .catch(()=>{
//     res.sendStatus(404)
//   });
// })

app.put('/api/questions', (req, res) => {
  databaseControllers.insertQuestion(req.body, (error, result) => {
    if (error) {
      console.log('ERROR! Unable to insert question to database!', error);
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  })
});

// Delete
// app.delete('/api/questions/:questionId', (req, res) => {
//   deleteQuestion(req)
//   .then(()=>{
//     res.sendStatus(200)
//   })
//   .catch(()=>{
//     res.sendStatus(404)
//   });
// })

// USERS CRUD

// ORGANIZATIONS CRUD

// DECKS CRUD

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})