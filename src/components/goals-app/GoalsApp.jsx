import React, { useState } from "react";
import NewGoal from './NewGoal';
import GoalList from './GoalList';
import "./GoalsApp.css";

const GoalsApp = () => {

  let goals = [
    {goal: 'Read a book this year', id: 'g1'},
    {goal: 'Do not eat out this year', id: 'g2'},
    {goal: 'Land a great developer role', id: 'g3'}
  ]

  return (
    <div>
      <NewGoal />
      <GoalList goalData={goals} />
    </div>
  );
};

export default GoalsApp;
