import React from 'react';

import './NewMovie.css';

const NewMovie = () => {
  return (
    <form className='movie-form'>
        <input type="text" />
        <button type='submit'>Add Movie</button>
    </form>
  )
}

export default NewMovie