import React, {useState} from 'react'

import NewBook from './NewBook';
import BookList from './BookList'
import './BooksRead.css';

const BooksRead = () => {
    const [bookData, setBookData] = useState([
        {id: 'b1', title: 'A thousand splendid suns'},
        {id: 'b2', title: 'Crime and Punishment'},
        {id: 'b3', title: 'A picture of Dorian Grey'}
    ])

    const handleDeleteBook = (bookId) => {
        setBookData(prevBookData => prevBookData.filter((b) => b.id !== bookId))
    }

    const handleNewBook = (additionalBook) => {
        setBookData(prevBookData => [...prevBookData, additionalBook])
    }


  return (
    <div>
        <h1 className='books-header'>Books I have read</h1>
        <NewBook newBook={handleNewBook} />
        <BookList books={bookData} deleteBook={handleDeleteBook} />
    </div>
  )
}

export default BooksRead