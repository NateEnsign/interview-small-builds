import React, { useState } from "react";

import NewMovie from "./NewMovie";
import MovieList from "./MovieList";
import "./TopMovies.css";

const TopMovies = (movieId) => {
  const [movieData, setMovieData] = useState([
    { id: "m1", title: "Hacksaw Ridge" },
    { id: "m2", title: "Remember the Titans" },
    { id: "m3", title: "About Time" },
    { id: "m4", title: "Get Smart" },
    { id: "m5", title: "Hot Rod" },
  ]);

  const deleteMovieHandler = (movieId) => {
    setMovieData((prevMovieData) =>
      prevMovieData.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <div>
      <h1 className="movie-header">My Favorite Movies</h1>
      <NewMovie />
      <MovieList movies={movieData} deleteMovie={deleteMovieHandler} />
    </div>
  );
};

export default TopMovies;
