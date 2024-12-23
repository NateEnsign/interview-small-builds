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
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  const deleteTaskHandler = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskId)
    )
  };

  return (
    <div>
      <h1 className="to-do-header">To Do List</h1>
      <NewToDo onAddTask={addNewTaskHandler} />
      <ToDoList listItems={taskList} deleteTask={deleteTaskHandler} />
    </div>
  );
};

export default ToDo;
