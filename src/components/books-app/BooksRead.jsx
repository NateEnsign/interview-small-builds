import React from "react";

import BookList from "./BookList";
import "./BooksRead.css";

const BooksRead = () => {
  const bookData = [
    { id: "b1", title: "Picture of Dorian Grey", pages: 'p. 521' },
    { id: "b2", title: "Crime and Punishment", pages: 'p. 743' },
    { id: "b3", title: "A Thousand Splendid Suns", pages: 'p. 273' },
  ];

  return (
    <>
      <h1 className="books-header">Books I have read</h1>
      <BookList books={bookData} />
    </>
  );
};

export default BooksRead;
