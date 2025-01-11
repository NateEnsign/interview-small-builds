import React from "react";

import "./BookList.css";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((b) => {
        return (
          <li>
            <div>{b.title}</div>
            <div>{b.pages}</div>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
