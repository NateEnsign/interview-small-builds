import React, { useState } from 'react';

import './NewPeak.css';

const NewPeak = ({ addPeak }) => {
    const [textInput,setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        const newPeak = {
            id: Math.random().toString(),
            name: textInput,
        }
        addPeak(newPeak)
        setTextInput('');
    }

  return (
    <form className='peak-form' onSubmit={onSubmitForm} >
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type='submit'>Add Peak</button>
    </form>
  )
}

export default NewPeak