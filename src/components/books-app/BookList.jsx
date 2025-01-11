import React from "react";

import "./BookList.css";

const BookList = ({ books, deleteBook }) => {
  return (
    <ul className="book-list">
      {books.map(({title, pages, id}) => {
        return (
          <li>
            <div>{title}</div>
            <div>{pages}</div>
            <button onClick={() => deleteBook(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
