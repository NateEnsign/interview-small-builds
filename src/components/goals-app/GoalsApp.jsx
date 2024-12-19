import React from "react";
import GoalList from "./GoalList";
import "./GoalsApp.css";

const GoalsApp = () => {
  const goals = [
    { cg1: 1, text: "Finish the course" },
    { cg2: 2, text: "Help other people to learn along the way" },
    { cg3: 3, text: "Go on to change the world" },
  ];

  return (
    <div>
      <h1 className="goals-header">Goal List</h1>
      <GoalList goals={goals} />
    </div>
  );
};

export default GoalsApp;
