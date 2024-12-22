import React from 'react'
import './NewToDo.css';

const NewToDo = ({onAddTask}) => {
    const addTaskHandler = (event) => {
        event.preventDefault();

        const newTask = {
            id: Math.random().toString(),
            text: 'Make out with an Asian chick',
        }
            onAddTask(newTask);
    }

  return (
    <div>
        <form className='new-task' onSubmit={addTaskHandler}>
            <input type="text" />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default NewToDo