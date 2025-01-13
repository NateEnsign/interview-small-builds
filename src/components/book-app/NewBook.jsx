import React, { useState } from 'react'

import './NewBook.css';

const NewBook = ({addBook}) => {
    const [textInput, setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value)
    }

    const submitBookHandler = (event) => {
        event.preventDefault();

        const bookData = {
            id: Math.random().toString(),
            title: textInput,
        }
        addBook(bookData);
        setTextInput('');
    }


  return (
    <form className='book-form' onSubmit={submitBookHandler}>
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default NewBook