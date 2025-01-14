import React from 'react'

import './BookList.css';

const BookList = ({books, deleteBook}) => {
  return (
    <ul className='book-list'>
        {books.map(({id, title}) => <li key={id}>
            <span>{title}</span>
            <button onClick={() => deleteBook(id)}>Delete</button>
        </li>)}
    </ul>
  )
}

export default BookList