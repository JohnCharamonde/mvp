import React from 'react';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answer: null,
      deck: null,
      star: null,
    }
  }

  handleChange(category, e) {
    this.setState({
      [category]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "100%", fontFamily: "New Century Schoolbook, serif", fontSize: "20px", color: "#2f4f4f", zIndex: 100, backgroundColor: "white" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end", height: 50, width: "100%", fontSize: "30px"
        }}>
          <i className="fas fa-times" onClick={(e) => {this.props.toggleCreating(e)}}></i>
          <div style={{ width: "20px" }}></div>
        </div>
        <form>
          <label>
            Question:
          <input type="text" style={{ height: "200px", width: "95%" }} onChange={(e) => { this.handleChange('question', e) }}></input>
          </label><br /><br />
          <label>
            Answer:
          <input type="text" style={{ height: "200px", width: "95%" }} onChange={(e) => { this.handleChange('answer', e) }}></input>
          </label><br /><br />
          <label>
            Deck:<br />
            <select onChange={(e) => { this.handleChange('deck', e) }}>
              {this.props.decks.slice(0, this.props.decks.length - 1).map(deck => {
                return <option value={deck}>{deck}</option>
              })}
            </select>
          </label><br /><br />
          <label>
            Add to Starred:
            <input type="checkbox" value={!this.state.star} onChange={(e) => { this.handleChange('star', e) }}/>
          </label><br /><br />
          <button onClick={(e) => {this.props.handleSubmit(this.state.question, this.state.answer, this.state.deck, this.state.star, e)}}>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateForm;