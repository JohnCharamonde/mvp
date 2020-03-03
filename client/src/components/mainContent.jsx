import React from 'react';

function MainContent(props) {
  return (
    <div style={{ display: "flex", height: "525px", width: "100%", borderBottom: "2px solid #2f4f4f", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", height: "500px", width: "15%", borderRight: "1px solid #2f4f4f", color: "black" }}>
        <form>
          {props.decks.map(deck => {
            return (
              <label>
                <input type="checkbox" value={deck}></input>
                {deck}
                <br/>
              </label>
            )
          })}
        </form>
      </div>
      <div style={{ display: "flex", height: "500px", width: "5%", justifyContent: "center", alignItems: "center", fontSize: "50px" }} onClick={(e) => { props.handlePreviousCardClick(e) }}><i className="fas fa-chevron-left"></i></div>
      <div style={{ display: "flex", height: "500px", width: "75%", justifyContent: "center", alignItems: "center", fontSize: "40px", color: "black", border: "1px solid #2f4f4f" }} onClick={(e) => { props.handleCardFlip(e) }}>{props.showingQuestion ? props.question.question : props.question.answer}</div>
      <div style={{ display: "flex", height: "500px", width: "5%", justifyContent: "center", alignItems: "center", fontSize: "50px" }} onClick={(e) => { props.handleNextCardClick(e) }}><i className="fas fa-chevron-right"></i></div>
    </div>
  )
}

export default MainContent;