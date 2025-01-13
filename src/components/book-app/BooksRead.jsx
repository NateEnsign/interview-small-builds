import React, { useState } from "react";

import NewBook from "./NewBook";
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

  const addBookHandler  = (bookData) => {
    setBooksRead(prevBooksRead => [...prevBooksRead, bookData])
  }

  return (
    <>
      <h1 className="books-header">Books I have Read</h1>
      <NewBook addBook={addBookHandler} />
      <BookList books={booksRead} deleteBook={deleteBookHandler} />
    </>
  );
};

export default BooksRead;
