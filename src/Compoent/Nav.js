import React from "react";
import "./styles.css";
import Button from "./Recompoent/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Nav = () => {
  return (
    <Router>
      <div className="navBar">
        <p>Lankit.</p>
        <div className="navLink">
          <span>
            <Link to="/New"> Landing</Link>
          </span>
          <span>
            <Link to="/New"> Pages </Link>
          </span>
          <span>
            <Link to="/New">Account</Link>
          </span>
          <span>
            <Link to="/New">Documentation</Link>
          </span>
        </div>
        <Button text={"Buy now"} cls={`navButton`} />
      </div>
    </Router>
  );
};

export default Nav;
