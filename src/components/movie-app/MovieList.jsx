import React from "react";

const MovieList = ({ movies }) => {
  return (
    <ul>
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
