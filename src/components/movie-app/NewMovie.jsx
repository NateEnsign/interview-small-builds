import React, {useState} from 'react'

import './NewMovie.css';

const NewMovie = ({addMovie}) => {
    const [textInput, setTextInput] = useState('')

    const inputHandler = (event) => {
        setTextInput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newMovie = {
            id: Math.random().toString(),
            title: textInput,
        };
        addMovie(newMovie);
        setTextInput('');
    }

  return (
    <form className='movie-form' onSubmit={submitHandler}>
        <input type="text" value={textInput} onChange={inputHandler} />
       <button type='submit'>Add Movie</button>
    </form>
  )
}

export default NewMovie