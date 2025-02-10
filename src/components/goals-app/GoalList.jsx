import React from "react";
import "./GoalList.css";

const GoalList = ({ goalData, deleteGoal }) => {
  return (
    <ul className="goal-list">
      {goalData.map(({id, goal}) => {
        return (
          <li key={id}>
            <span>{goal}</span>
            <button onClick={() => deleteGoal(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
