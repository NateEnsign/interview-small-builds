import React, { useState } from 'react';
import './NewCountry.css';

const NewCountry = ({addCountry}) => {
    const [inputText, setInputText] = useState('');

    const handleInputText = (event) => {
        setInputText(event.target.value)
    }

    const handleNewCountry = (event) => {
        event.preventDefault();

        const newCountry = {
            id: Math.random().toString(),
            name: inputText,
        }
        addCountry(newCountry)
        setInputText('')
    }

  return (
    <form className="country-form" onSubmit={handleNewCountry}>
        <input type="text" value={inputText} onChange={handleInputText}  />
        <button type='submit'>Add Country</button>
    </form>
  )
}

export default NewCountry