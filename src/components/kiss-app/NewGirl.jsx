import React, { useState } from "react";

import "./NewGirl.css";

const NewGirl = ({addGirl}) => {
  const [textInput, setTextInput] = useState("");

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newData = { id: Math.random().toString(), name: textInput };

    addGirl(newData);
    setTextInput('')
  };

  return (
    <form className="new-girl" onSubmit={submitHandler}>
      <input type="text" value={textInput} onChange={handleInputChange} />
      <button type="submit">Add Girl</button>
    </form>
  );
};

export default NewGirl;
