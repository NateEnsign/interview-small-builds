import React, {useState} from 'react'

import BookList from './BookList'

const BooksRead = () => {
    const [bookData, setBookData] = useState([
        {id: 'b1', title: 'A thousand splendid suns'},
        {id: 'b2', title: 'Crime and Punishment'},
        {id: 'b3', title: 'A picture of Dorian Grey'}
    ])

    const handleDeleteBook = (bookId) => {
        setBookData(prevBookData => prevBookData.filter((b) => b.id !== bookId))
    }


  return (
    <div>
        <h1>Books I have read</h1>
        <BookList books={bookData} deleteBook={handleDeleteBook} />
    </div>
  )
}

export default BooksRead