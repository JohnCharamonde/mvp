import React from 'react';

function MenuBar(props) {
  return (
    <div style={{ display: "flex", height: "50px", width: "100%", borderBottom: "2px solid #2f4f4f", borderTop: "8px solid #2f4f4f", justifyContent: "center" }}>
      <div style={{ display: "flex", height: "50px", justifyContent: "Center", alignItems: "center", marginRight: "20px", marginLeft: "20px" }}>Decks</div>
      <div style={{ display: "flex", height: "50px", justifyContent: "Center", alignItems: "center", marginRight: "20px", marginLeft: "20px" }} onClick={(e) => { props.toggleCreating(e)}}>Questions</div>
      <div style={{ display: "flex", height: "50px", justifyContent: "Center", alignItems: "center", marginRight: "20px", marginLeft: "20px" }}>Statistics</div>
      <div style={{ display: "flex", height: "50px", justifyContent: "Center", alignItems: "center", marginRight: "20px", marginLeft: "20px" }}>Community</div>
    </div>
  )
}

export default MenuBar;