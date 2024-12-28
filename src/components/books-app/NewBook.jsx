import React, { useState } from 'react'
import './NewBook.css';

const NewBook = ({additionalBook}) => {
    const [textInput,setTextInput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const nextBook = {
            id: Math.random().toString(),
            book: textInput,
        }

        setTextInput('');
        additionalBook(nextBook);
    }

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    }

  return (
    <div>
        <form className='book-form' onSubmit={submitHandler}>
            <input type="text" value={textInput} onChange={handleTextChange} />
            <button>Add Book</button>
        </form>
    </div>
  )
}

export default NewBook