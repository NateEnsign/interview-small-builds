import React, {useState} from 'react'

import './NewBook.css';

const NewBook = ({newBook}) => {
    const [textInput, setTextInput] = useState('');

    const handleInputText = (event) => {
        setTextInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const additionalBook = {
            id: Math.random().toString(),
            title: textInput
        }
        newBook(additionalBook)
        setTextInput('');
    }

  return (
    <form className='book-form' onSubmit={submitHandler}>
        <input type="text" value={textInput} onChange={handleInputText} />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default NewBook