import React from 'react'
import './NewPlace.css'

const NewPlace = ({addCountry}) => {
    const onAddPlace = (event) => {
        event.preventDefault();

    const newCountry = {
        id: Math.random().toString(),
        name: 'Costa Rica',
    }

    addCountry(newCountry)
    }

  return (
    <div>
        <form className='place-form' onSubmit={onAddPlace}>
            <input type="text" />
            <button type='submit'>Add Country</button>
        </form>
    </div>
  )
}

export default NewPlace