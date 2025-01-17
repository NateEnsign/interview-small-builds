import React from 'react'

const BookList = ({books, deleteBook}) => {

  return (
    <ul>
        {books.map(({id, title}) => {
            return (
                <li key={id}>
                    <span>{title}</span>
                    <button onClick={() => deleteBook(id)} >Delete</button>
                </li>
            )
        })}
    </ul>
  )
}

export default BookList