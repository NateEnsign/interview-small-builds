import React from 'react'
import './NewPeak.css';

const NewPeak = ({addPeak}) => {
    const onAddNewPeak = (event) => {
        event.preventDefault();

        const newPeak = {
            id: Math.random().toString(),
            peak: 'Mount Everrest',
        }
        addPeak(newPeak)
    }

  return (
    <div>
        <form className='peak-form' onSubmit={onAddNewPeak}>
            <input type="text" />
            <button type='submit'>Add Peak</button>
        </form>
    </div>
  )
}

export default NewPeak