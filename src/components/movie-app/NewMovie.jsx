import React, {useState} from 'react'

import './NewMovie.css';

const NewMovie = () => {
    const [textInput, setTextInput] = useState('')

    const inputHandler = (event) => {
        setTextInput(event.targe.value)
    }

  return (
    <form className='movie-form'>
        <input type="text" value={textInput} onChange={inputHandler} />
       <button>Add Movie</button>
    </form>
  )
}

export default NewMovie