import React from "react";

import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className="movies-list">
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <span>{title}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
