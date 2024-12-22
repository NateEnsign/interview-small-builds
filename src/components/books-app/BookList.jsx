import React from 'react'
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div>
        <ul className='book-list'>
            {books.map((book) => {
                return <li key={book.id}>{book.book}</li>
            })}
        </ul>
    </div>
  )
}

export default BookList