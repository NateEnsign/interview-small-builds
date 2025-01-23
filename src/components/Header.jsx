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
            <NavLink to="/movies" activeClassName="active">Top Movies</NavLink>
          </li>
          <li>
            <NavLink to="/books" activeClassName="active">Books Read</NavLink>
          </li>
          <li>
            <NavLink to="/peaks" activeClassName="active">Peaks Climbed</NavLink>
          </li>
          <li>
            <NavLink to="/places" activeClassName="active">Places Visited</NavLink>
          </li>
          <li>
            <NavLink to="/goals" activeClassName="active">Goals</NavLink>
          </li>
          <li>
            <NavLink to="/chores" activeClassName="active">To Do</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




