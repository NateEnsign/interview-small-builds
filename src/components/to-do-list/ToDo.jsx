import React from "react";
import "./ToDo.css";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const toDoItems = [
    { id: "td1", text: "Go to the grocery store" },
    { id: "td2", text: `Kick Austin's ass` },
    { id: "td3", text: "Become a kick ass developer" },
  ];

  return (
    <div>
      <h1 className="to-do-header">To Do List</h1>
      <ToDoList listItems={toDoItems} />
    </div>
  );
};

export default ToDo;
