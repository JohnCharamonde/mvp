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
    } else (
      callback(null, questions);
    )
  });
}

// Update
const updateQuestion = (question_id, questionObj, callback) => {
  Question.updateOne({ _id: question_id }, questionObj, (error, question) => {
    if(error) {
      callback(error);
    } else {
      callback(null, question);
    }
  });
}

// Delete
const deleteQuestion = (question_id, callback) => {
  Question.delete({ _id: question_id }, (error, question) => {
    if(error) {
      callback(error);
    } else {
      callback(null, question);
    }
  });
}

module.exports = {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion
}