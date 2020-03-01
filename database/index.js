const mongoose = require('mongoose');
const questionSchema = require('./models/Question.js');

const mongoURI = 'mongodb://localhost/questions';
mongoose.Promise = global.Promise;

const db = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Question = db.model('Question', questionSchema);

module.exports = Question;
