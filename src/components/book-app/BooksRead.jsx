import React, {useState} from 'react'

import BookList from './BookList'

const BooksRead = () => {
    const [bookData, setBookData] = useState([
        {id: 'b1', title: 'A thousand splendid suns'},
        {id: 'b2', title: 'Crime and Punishment'},
        {id: 'b3', title: 'A picture of Dorian Grey'}
    ])



  return (
    <div>
        <h1>Books I have read</h1>
        <BookList books={bookData} />
    </div>
  )
}

export default BooksRead