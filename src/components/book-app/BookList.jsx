import React from "react";

import './BookList.css';

const BookList = ({ books, deleteBook }) => {
  return (
    <ul className="book-list">
      {books.map((b) => {
        return (
          <li key={b.id}> 
            <span>{b.title}</span>
            <button onClick={() => deleteBook(b.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
