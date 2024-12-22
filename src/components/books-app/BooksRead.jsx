import React, { useState } from 'react'
import './BooksRead.css';
import BookList from './BookList';
import NewBook from './NewBook';

const BooksRead = () => {
    const [completedBooks, setCompletedBooks] = useState([
        {id: 'cb1', book: 'Where the Red Fern Grows'},
        {id: 'cb2', book: 'Crime and Punishment'},
        {id: 'cb3', book: 'A Thousand Splendid Suns'},
    ])

    const addNewBookHandler = (nextBook) => {
        setCompletedBooks(completedBooks.concat(nextBook))
    }

  return (
    <div>
        <h1 className='books-read-header'>Books I have Read</h1>
        <NewBook additionalBook={addNewBookHandler} />
        <BookList books={completedBooks} />
        
    </div>
  )
}

export default BooksRead