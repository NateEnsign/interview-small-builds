import React from 'react'

const BookList = ({books}) => {
  return (
    <ul>
        {books.map(({id, title}) => {
            return (
                <li key={id}>
                    <span>{title}</span>
                    <button>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}

export default BookList