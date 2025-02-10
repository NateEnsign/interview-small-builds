import React from "react";
import "./GoalList.css";

const GoalList = ({ goalData }) => {
  return (
    <ul className="goal-list">
      {goalData.map(({ goal, id }) => {
        return (
          <li key={id}>
            <span>{goal}</span>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
