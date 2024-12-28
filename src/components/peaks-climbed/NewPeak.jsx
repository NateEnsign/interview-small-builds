import React, { useState } from 'react'
import './NewPeak.css';

const NewPeak = ({addPeak}) => {
    const [textInput,setTextInput] = useState('');

    const onAddNewPeak = (event) => {
        event.preventDefault();

        const newPeak = {
            id: Math.random().toString(),
            peak: textInput,
        }
        setTextInput('');
        addPeak(newPeak)
    }

    const handleTextChange = (event) => {
        setTextInput(event.target.value)
    }

  return (
    <div>
        <form className='peak-form' onSubmit={onAddNewPeak}>
            <input type="text" value={textInput} onChange={handleTextChange} />
            <button type='submit'>Add Peak</button>
        </form>
    </div>
  )
}

export default NewPeak