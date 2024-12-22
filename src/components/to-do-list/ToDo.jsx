import React, { useState } from "react";
import "./ToDo.css";
import ToDoList from "./ToDoList";
import NewToDo from "./NewToDo";

const ToDo = () => {
  const [taskList, setTaskList] = useState([
    { id: "td1", text: "Go to the grocery store" },
    { id: "td2", text: `Kick Austin's ass` },
    { id: "td3", text: "Become a kick ass developer" },
  ]);

  const addNewTaskHandler = (newTask) => {
    setTaskList(taskList.concat(newTask))
  }


  return (
    <div>
      <h1 className="to-do-header">To Do List</h1>
      <NewToDo onAddTask={addNewTaskHandler} />
      <ToDoList listItems={taskList} />
    </div>
  );
};

export default ToDo;
