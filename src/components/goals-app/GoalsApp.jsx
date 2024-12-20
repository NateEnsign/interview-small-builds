import React, { useState } from "react";
import GoalList from "./GoalList";
import NewGoal from "./NewGoal";
import "./GoalsApp.css";

const GoalsApp = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: "Finish the course" },
    { id: 'cg2', text: "Help other people to learn along the way" },
    { id: 'cg3', text: "Go on to change the world" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal))
  }

  return (
    <div>
      <h1 className="goals-header">Goal List</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default GoalsApp;
