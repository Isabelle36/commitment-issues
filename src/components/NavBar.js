import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="cont"></div>
      <div className="container">
        <nav className="topNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
