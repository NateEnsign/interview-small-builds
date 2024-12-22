import React from 'react'
import './NewGirl.css';

const NewGirl = ({addGirl}) => {
    const addNewGirlHandler = (event) => {
        event.preventDefault();

        const newGirl = {
            id: Math.random().toString(),
            name: 'Megan Fox',
        }
        addGirl(newGirl);
    }

  return (
    <div>
        <form className='new-girl' onSubmit={addNewGirlHandler}>
            <input type="text" />
            <button type='submit'>Add Girl</button>
        </form>
    </div>
  )
}

export default NewGirl