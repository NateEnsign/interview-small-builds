import React from "react";

const BookList = ({ books, deleteBook }) => {
  return (
    <ul>
      <li>
        {books.map(({ title, id }) => {
          return (
            <div>
              <span>{title}</span>
              <button onClick={() => deleteBook(id)}>Delete</button>
            </div>
          );
        })}
      </li>
    </ul>
  );
};

export default BookList;
