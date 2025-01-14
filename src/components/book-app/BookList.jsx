import React from 'react'

const BookList = ({books}) => {
  return (
    <ul>
        {books.map(({id, title}) => <li>
            <span>{title}</span>
            <button>Delete</button>
        </li>)}
    </ul>
  )
}

export default BookList