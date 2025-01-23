import React, {useState} from 'react';

import MovieList from './MovieList';
import './TopMovies.css';

const TopMovies = () => {
    const [movieData, setMovieData] = useState([
        {id: 'm1', title: 'Hacksaw Ridge'},
        {id: 'm2', title: 'Remember the Titans'},
        {id: 'm3', title: 'About Time'},
        {id: 'm4', title: 'Get Smart'}
    ])

    const handleDeleteMovie = (movieId) => {
        setMovieData(prevMovieData => prevMovieData.filter(movie => movie.id !== movieId))
    }

  return (
    <div>
        <h1 className='movie-header'>Favorite Movies I have Seen</h1>
        <MovieList movies={movieData} deleteMovie={handleDeleteMovie} />
    </div>
  )
}

export default TopMovies