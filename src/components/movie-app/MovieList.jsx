import React from "react";

import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <span>{title}</span>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
