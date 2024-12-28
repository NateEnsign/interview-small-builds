import React, { useState } from 'react'
import './NewGirl.css';

const NewGirl = ({addGirl}) => {
    const [textInput,setTextInput] = useState('');

    const addNewGirlHandler = (event) => {
        event.preventDefault();

        const newGirl = {
            id: Math.random().toString(),
            name: textInput,
        }

        setTextInput('');
        addGirl(newGirl);
    }

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    }

  return (
    <div>
        <form className='new-girl' onSubmit={addNewGirlHandler}>
            <input type="text" value={textInput} onChange={handleTextChange} />
            <button type='submit'>Add Girl</button>
        </form>
    </div>
  )
}

export default NewGirl