import React, { useState } from "react";
import NewGoal from './NewGoal';
import GoalList from './GoalList';
import "./GoalsApp.css";

const GoalsApp = () => {

  const [goals, setGoals] = useState([
    {goal: 'Read a book this year', id: 'g1'},
    {goal: 'Do not eat out this year', id: 'g2'},
    {goal: 'Land a great developer role', id: 'g3'}
  ]);

  const deleteHandler = (goalId) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId))
  }

  const addGoalHandler = (newData) => {
    setGoals(prevGoals => [...prevGoals, newData])
  }

  return (
    <div>
      <h1 className='goals-header'>Goals</h1>
      <NewGoal addGoal={addGoalHandler} />
      <GoalList goalData={goals} deleteGoal={deleteHandler} />
    </div>
  );
};

export default GoalsApp;
