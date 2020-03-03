import React from 'react';

function Header(props) {
  return (
    <div style={{ display: "flex", height: "100px", width: "100%" }}>
      <div style={{ height: "100px", width: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}><i className="fas fa-bars"></i></div>
      <div style={{ height: "100px", width: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}><i className="fas fa-search"></i></div>
      <div style={{ height: "100px", width: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}></div>
      <div style={{ display: "flex", height: "100px", width: "100%", fontWeight: "700", fontSize: "50px", alignItems: "center", justifyContent: "center" }}>F L A X X</div>
      <div style={{ display: "flex", height: "100px", width: "50px", alignSelf: "flex-end", alignItems: "center", justifyContent: "center" }}><i className="far fa-bell"></i></div>
      <div style={{ display: "flex", height: "100px", width: "50px", alignSelf: "flex-end", alignItems: "center", justifyContent: "center" }}><i className="far fa-comments"></i></div>
      <div style={{ display: "flex", height: "100px", width: "50px", alignSelf: "flex-end", alignItems: "center", justifyContent: "center" }}><i className="far fa-user"></i></div>
    </div>
  )
}

export default Header;