const Question = require('../index.js');

// Create
const insertQuestion = (questionObj, callback) => {
  let newQuestion = new Question({
    question: questionObj.question,
    answer: questionObj.answer,
    deck: questionObj.answer,
    star: false
  })

  newQuestion.save((error, question) => {
    if (error) {
      callback(error);
    } else {
      callback(null, question)
    }
  })
}

// Read

// Update

// Delete

module.exports = {
  insertQuestion

}