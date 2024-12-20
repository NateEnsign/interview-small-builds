import React from "react";
import GoalList from "./GoalList";
import NewGoal from "./NewGoal";
import "./GoalsApp.css";

const GoalsApp = () => {
  const goals = [
    { id: 'cg1', text: "Finish the course" },
    { id: 'cg2', text: "Help other people to learn along the way" },
    { id: 'cg3', text: "Go on to change the world" },
  ];

  const addNewGoalHandler = (newGoal) => {
    goals.push(newGoal);
    console.log(goals)
  }

  return (
    <div>
      <h1 className="goals-header">Goal List</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
};

export default GoalsApp;
