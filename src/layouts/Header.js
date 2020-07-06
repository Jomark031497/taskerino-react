import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container" >
      <Link to="/taskerino-react" style={{textDecoration: "none"}}>
      <h1 className="header-title">Project: Taskerino</h1>
      </Link>
     

      <div className="nav-link">
        <Link to="/taskerino-react" className="links">Home</Link> | <Link to="/about" className="links">About</Link>
      </div>

      <button className="nav-button">{"<View Code/>"}</button>
    </header>
  );
}

export default Header;
