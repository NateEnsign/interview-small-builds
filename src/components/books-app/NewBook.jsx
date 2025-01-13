import React, { useState } from 'react';

import './NewBook.css';

const NewBook = ({addBook}) => {
    const [textInput, setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        const newBook = {
            id: Math.random().toString(),
            title: textInput,
        }
        addBook(newBook);
        setTextInput('');
    }

  return (
    <form className='book-form' onSubmit={onSubmitForm}>
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default NewBook