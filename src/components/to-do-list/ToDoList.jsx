import React from "react";
import "./ToDoList.css";

const ToDoList = ({ listItems }) => {
  return (
    <div>
      <ul className="daily-list">
        {listItems.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
