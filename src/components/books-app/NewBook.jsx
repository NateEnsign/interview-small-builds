import React, { useState } from "react";

import "./NewBook.css";

const NewBook = ({ addBook }) => {
  const [textInput, setTextInput] = useState("");

  const handleInput = (event) => {
    setTextInput(event.target.value);
  };

  const handleNewBook = (event) => {
    event.preventDefault();

    const bookEntry = 
      { id: Math.random().toString(), title: textInput, pages: "p. 500" };
    

    addBook(bookEntry);
    setTextInput("");
  };

  return (
    <form className="book-form" onSubmit={handleNewBook}>
      <input type="text" value={textInput} onChange={handleInput} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBook;
