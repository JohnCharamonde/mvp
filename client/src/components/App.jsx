import React from 'react';
import axios from 'axios';
import Header from './header.jsx';
import MenuBar from './menuBar.jsx';
import MainContent from './mainContent.jsx';
import CreateForm from './createForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: ['No Deck Selected'],
      questions: [{ question: 'Select a deck to get started!', answer: 'Select a deck to get started!' }],
      sessionDecks: [],
      sessionQuestions: [],
      currentQuestion: 0,
      showingQuestion: true,
      decksSelected: null,
      creating: false,
      updating: false
    }
  }

  componentDidMount() {
    axios.get('/api/questions')
      .then(data => {
        let decks = [];
        data.data.forEach(question => {
          if (decks.indexOf(question.deck) === -1) {
            decks.push(question.deck)
          }
        })
        decks.push('Starred');
        this.setState({
          questions: data.data,
          decks: decks
        })
      })
      .catch(err => {
        console.log(err)
      });
  }

  handleNextCardClick(e) {
    let next;
    if (this.state.currentQuestion === this.state.questions.length - 1) {
      next = 0;
    } else {
      next = this.state.currentQuestion + 1;
    }
    this.setState({
      currentQuestion: next,
      showingQuestion: true
    })
  }

  handlePreviousCardClick(e) {
    let previous;
    if (this.state.currentQuestion === 0) {
      previous = this.state.questions.length - 1;
    } else {
      previous = this.state.currentQuestion - 1;
    }
    this.setState({
      currentQuestion: previous,
      showingQuestion: true
    })
  }

  handleCardFlip(e) {
    let flipped = !this.state.showingQuestion;
    console.log(flipped)
    this.setState({
      showingQuestion: flipped
    })
  }

  handleSubmit(question, answer, deck, star, e) {
    let questionObj = {
      question: question,
      answer: answer,
      deck: deck,
      star: star
    }
    axios.post('/api/questions', questionObj)
      .then(res => {
        axios.get('/api/questions')
          .then(data => {
            let decks = [];
            data.data.forEach(question => {
              if (decks.indexOf(question.deck) === -1) {
                decks.push(question.deck)
              }
            })
            decks.push('Starred');
            this.setState({
              questions: data.data,
              decks: decks,
              creating: false
            })
          })
          .catch(err => {
            console.log(err)
          });
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleCreating(e) {
    let toggled = !this.state.creating;
    this.setState({
      creating: toggled
    })
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%", fontFamily: "New Century Schoolbook, serif", fontSize: "20px", color: "#2f4f4f" }}>
        <Header />
        <MenuBar toggleCreating={this.toggleCreating.bind(this)}/>
        <MainContent decks={this.state.decks} question={this.state.questions[this.state.currentQuestion]} currentQuestion={this.state.currentQuestion} showingQuestion={this.state.showingQuestion} handleNextCardClick={this.handleNextCardClick.bind(this)} handlePreviousCardClick={this.handlePreviousCardClick.bind(this)} handleCardFlip={this.handleCardFlip.bind(this)} />
        {this.state.creating === true ? <CreateForm decks={this.state.decks} handleSubmit={this.handleSubmit.bind(this)} toggleCreating={this.toggleCreating.bind(this)} /> : ''}
        {this.state.updating === true ? <UpdateForm /> : ''}
      </div>
    )
  }
}

export default App;