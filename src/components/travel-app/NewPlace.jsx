import React, { useState } from 'react'
import './NewPlace.css'

const NewPlace = ({addCountry}) => {
    const [textInput,setTextInput] = useState('');

    const onAddPlace = (event) => {
        event.preventDefault();

    const newCountry = {
        id: Math.random().toString(),
        name: textInput,
    }

    setTextInput('');

    addCountry(newCountry)
    }

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    }

  return (
    <div>
        <form className='place-form' onSubmit={onAddPlace}>
            <input type="text" value={textInput} onChange={handleTextChange} />
            <button type='submit'>Add Country</button>
        </form>
    </div>
  )
}

export default NewPlace