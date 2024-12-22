import React, { useState } from 'react'
import './BooksRead.css';
import BookList from './BookList';

const BooksRead = () => {
    const [completedBooks, setCompletedBooks] = useState([
        {id: 'cb1', book: 'Where the Red Fern Grows'},
        {id: 'cb2', book: 'Crime and Punishment'},
        {id: 'cb3', book: 'A Thousand Splendid Suns'},
    ])

  return (
    <div>
        <h1 className='books-read-header'>Books I have Read</h1>
        <BookList books={completedBooks} />
    </div>
  )
}

export default BooksRead