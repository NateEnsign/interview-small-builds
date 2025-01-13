import React, { useState } from "react";

import BookList from "./BookList";
import "./BooksRead.css";

const BooksRead = () => {
  const [booksRead, setBooksRead] = useState([
    { id: "b1", title: "Where the Red Ferm Grows" },
    { id: "b2", title: "Crime and Punishment" },
    { id: "b3", title: "Where the Wild Things Are" },
  ]);

  const deleteBookHandler = (bookId) => {
    setBooksRead((prevBooksRed) =>
      prevBooksRed.filter((book) => book.id !== bookId)
    );
  };

  return (
    <>
      <h1 className="books-header">Books I have Read</h1>
      <BookList books={booksRead} deleteBook={deleteBookHandler} />
    </>
  );
};

export default BooksRead;
