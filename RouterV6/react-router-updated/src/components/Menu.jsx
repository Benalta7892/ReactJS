import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const navStyle = ({ isActive }) => {
    return {
      borderBottom: isActive && "4px solid #61dafb",
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/docs">
              Docs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={navStyle} to="/tutorial">
              Tutorial
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(navInfo) => (navInfo.isActive ? "nav-link active" : "nav-link")} to="/community">
              Community
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
