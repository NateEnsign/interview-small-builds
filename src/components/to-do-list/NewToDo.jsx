import React, { useState } from "react";
import "./NewToDo.css";

const NewToDo = ({ onAddTask }) => {
  const [inputText, setInputText] = useState("");

  const addTaskHandler = (event) => {
    event.preventDefault();

    const newTask = {
      id: Math.random().toString(),
      text: inputText,
    };
    setInputText('');
    onAddTask(newTask);
  };

  const changeTextHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <form className="new-task" onSubmit={addTaskHandler}>
        <input type="text" value={inputText} onChange={changeTextHandler} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewToDo;
