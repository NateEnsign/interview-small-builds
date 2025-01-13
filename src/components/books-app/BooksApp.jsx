import React, { useState } from "react";

import BookList from "./BookList";
import "./BooksApp.css";

const BooksApp = () => {
  const [booksRead, setBooksRead] = useState([
    { id: "b1", title: "Crime and Punishment" },
    { id: "b2", title: "A Thousand Splendid Suns" },
    { id: "b3", title: "A Picture of Dorian Grey" },
  ]);

  const handleDeleteBook = (bookId) => {
    setBooksRead((prevBooksRead) => {
        return prevBooksRead.filter((book) => book.id !== bookId)
    })
  }

  return (
    <>
      <h1 className="books-header">Books I have Read</h1>
      <BookList books={booksRead} deleteBook={handleDeleteBook} />
    </>
  );
};

export default BooksApp;
