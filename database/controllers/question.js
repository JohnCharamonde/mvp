const Question = require('../index.js');

// Create
const createQuestion = (question, answer, deck, star, callback) => {
  let newQuestion = new Question({
    question: question,
    answer: answer,
    deck: deck,
    star: star
  });

  newQuestion.save((error, question) => {
    if (error) {
      callback(error);
    } else {
      callback(null, question);
    }
  });
}

// Read
const readQuestions = (callback) => {
  Question.find((error, questions) => {
    if (error) {
      callback(error);
    } else {
      callback(null, questions);
    }
  });
}

// Update
const updateQuestion = (questionId, questionObj, callback) => {
  Question.updateOne({ _id: questionId }, questionObj, (error, question) => {
    if(error) {
      callback(error);
    } else {
      callback(null, question);
    }
  });
}

// Delete
const deleteQuestion = (questionId, callback) => {
  Question.deleteOne({ _id: questionId }, (error, question) => {
    if(error) {
      callback(error);
    } else {
      callback(null, question)
    }
  });
}

module.exports = {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion
}