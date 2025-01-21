import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Skill Development Zone</Link>
      </h1>
      <nav>
        <ul>
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




