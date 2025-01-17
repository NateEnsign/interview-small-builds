import React from 'react'

import './NewBook.css';

const NewBook = () => {
  return (
    <form className='book-form'>
        <input type="text" />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default NewBook