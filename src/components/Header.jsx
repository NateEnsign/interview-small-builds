import React from "react";
import { NavLink, Link } from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <h1 className="header-title">
        <Link to="/" className="site-title">Skill Development Zone</Link>
      </h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/girls">Girls Kissed</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books Read</NavLink>
          </li>
          <li>
            <NavLink to="/peaks">Peaks Climbed</NavLink>
          </li>
          <li>
            <NavLink to="/places">Places Visited</NavLink>
          </li>
          <li>
            <NavLink to="/goals">Goals</NavLink>
          </li>
          <li>
            <NavLink to="/chores">To Do</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




