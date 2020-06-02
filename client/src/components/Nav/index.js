import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item" >
          <Link to="/search" className="nav-link active"> Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="nav-link active">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;