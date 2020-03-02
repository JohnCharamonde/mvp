const Question = require('../index.js');

// Create
const createQuestion = (questionObj, callback) => {
  let newQuestion = new Question({
    question: QuestionObj.question,
    answer: questionObj.answer,
    deck: questionObj.answer,
    star: false
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