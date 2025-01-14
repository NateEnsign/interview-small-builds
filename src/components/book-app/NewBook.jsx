import React, {useState} from 'react'

import './NewBook.css';

const NewBook = ({addBook}) => {
   const [inputText, setInputText] = useState('');

   const handleInput = (event) => {
    setInputText(event.target.value);
   }

   const handleSubmit = (event) => {
    event.preventDefault();

    const bookDetails = {
        id: Math.random().toString(),
        title: inputText,
    }
    addBook(bookDetails)
   }


  return (
    <form className='book-form' onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInput} />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default NewBook