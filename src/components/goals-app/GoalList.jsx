import React from 'react'
import './GoalList.css';

const GoalList = ({goals}) => {
  console.log(goals)
  return (
    <div>
        <ul className='goal-list'>
           {goals.map(goal => {
            return <li key={goal.id}>{goal.text}</li>
           })}
        </ul>
    </div>
  )
}

export default GoalList