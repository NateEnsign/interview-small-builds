import React from 'react'
import './BookList.css';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div>
        <ul className='book-list'>
            {books.map(({id,book}) => {
                return <li key={id}>
                  <span>{book}</span>
                  <button onClick={() => onDeleteBook(id)}>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default BookList
