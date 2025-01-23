import React, {useState} from 'react';

import './NewMovie.css';

const NewMovie = ({addMovie}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newMovie = {
            id: Math.random().toString(),
            title: inputData
        }

        addMovie(newMovie);
        setInputData('')
    }

  return (
    <form className='movie-form' onSubmit={submitHandler}>
        <input type="text" value={inputData} onChange={handleInputChange} />
        <button type='submit'>Add Movie</button>
    </form>
  )
}

export default NewMovie