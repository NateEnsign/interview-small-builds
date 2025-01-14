import React, { useState } from "react";

import BookList from "./BookList";
import "./BooksRead.css";

const BooksRead = () => {
  const [bookData, setBookData] = useState([
    { id: "b1", title: "Where the Red Ferm Grows" },
    { id: "b2", title: "The Brothers Karamazov" },
    { id: "b3", title: "Crime and Punishment" },
  ]);

  const handleDeleteBook = (bookId) => {
    setBookData(prevBookData =>
      prevBookData.filter((book) => book.id !== bookId)
    );
  };

  return (
    <>
      <h1 className="books-header">Books I have Read</h1>
      <BookList books={bookData} deleteBook={handleDeleteBook} />
    </>
  );
};

export default BooksRead;
