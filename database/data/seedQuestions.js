const faker = require('faker/locale/en_US');
// const db = require('../index.js');
const Question = require('../index.js');

const deckCount = 10;

const createDeckNames = () => {
  let decks = []
  let deckNamesPushed = 0;
  while(deckNamesPushed < deckCount) {
    let name = faker.company.bsBuzz();
    decks.push(name.charAt(0).toUpperCase() + name.substring(1))
    deckNamesPushed++;
  }
  return decks;
}

const decks = createDeckNames();

const questionCount = 1000;

const createQuestions = () => {
  let questions = [];
  let questionsPushed = 0;
  while (questionsPushed < questionCount) {
    var question = {
      question: faker.lorem.sentence(),
      answer: faker.lorem.sentence(),
      deck: decks[Math.floor(Math.random() * 10)],
      star: false
    };
    questions.push(question);
    questionsPushed++;
  }
  return questions;
}

async function insertQuestions() {
  await Question.insertMany(createQuestions())
}

insertQuestions()
  .then(() => {
    console.log(`SUCCESS! Inserted ${questionCount} questions into the database!`);
    process.exit();
  })
  .catch((error) => {
    console.log('ERROR! Unable to insert questions into the database!', error)
  });