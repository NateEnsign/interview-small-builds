import React from "react";
import "./ToDoList.css";

const ToDoList = ({ listItems, deleteTask }) => {
  return (
    <div>
      <ul className="daily-list">
      {listItems.map(({id, text}) => {
        return <li key={id}>
          <span>{text}</span>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </li>
      })}
      </ul>
    </div>
  );
};

export default ToDoList;
