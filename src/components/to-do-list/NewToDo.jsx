import React from 'react'
import './NewToDo.css';

const NewToDo = () => {
    const addTaskHandler = (event) => {
        event.preventDefault();

        const newTask = {
            id: Math.random().toString(),
            text: 'Make out with an Asian chick',
        }
    }

  return (
    <div>
        <form className='new-task'>
            <input type="text" />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default NewToDo