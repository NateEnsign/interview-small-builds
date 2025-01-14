import React, { useState } from "react";

import NewBook from "./NewBook";
import BookList from "./BookList";
import "./BooksRead.css";

const BooksRead = () => {
  const [bookData, setBookData] = useState([
    { id: "b1", title: "Where the Red Ferm Grows" },
    { id: "b2", title: "The Brothers Karamazov" },
    { id: "b3", title: "Crime and Punishment" },
  ]);

  const handleDeleteBook = (bookId) => {
    setBookData((prevBookData) =>
      prevBookData.filter((book) => book.id !== bookId)
    );
  };

  const onAddBook = (bookDetails) => {
    setBookData((prevBookData) => [...prevBookData, bookDetails]);
  };

  return (
    <>
      <h1 className="books-header">Books I have Read</h1>
      <NewBook addBook={onAddBook} />
      <BookList books={bookData} deleteBook={handleDeleteBook} />
    </>
  );
};

export default BooksRead;
