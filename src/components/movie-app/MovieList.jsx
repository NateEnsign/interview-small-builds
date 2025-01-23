import React from "react";

import './MovieList.css';

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <ul className="movie-list">
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <span>{title}</span>
            <button onClick={() => deleteMovie(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
