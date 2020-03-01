const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  deck: Number,
  starred: Boolean,
});

const Question = mongoose.model('Question', attendeeSchema);

module.exports = Question;