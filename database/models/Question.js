const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  question: String,
  answer: String,
  deck: String,
  star: Boolean,
});

module.exports = questionSchema;