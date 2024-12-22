import React from 'react'
import './NewBook.css';

const NewBook = ({additionalBook}) => {
    const submitHandler = (event) => {
        event.preventDefault();

        const nextBook = {
            id: Math.random().toString(),
            book: 'Heart of Darkness',
        }
        additionalBook(nextBook);
    }

  return (
    <div>
        <form className='book-form' onSubmit={submitHandler}>
            <input type="text" />
            <button>Add Book</button>
        </form>
    </div>
  )
}

export default NewBook