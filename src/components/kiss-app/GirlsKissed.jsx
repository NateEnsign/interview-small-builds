import React, {useState } from 'react';
import KissedList from './KissedList';
import NewGirl from './NewGirl';
import './GirlsKissed.css';

const GirlsKissed = () => {
    const [girlsKissed,setGirlsKissed] = useState([
        {id: 'gk1', name: 'Mykala Steadman'},
        {id: 'gk2', name: 'Megan Bolton'},
        {id: 'gk3', name: 'Sarah Wittmeyer'},
        {id: 'gk4', name: 'Kacey Savage'},
        {id: 'gk5', name: 'Hilma Povanhu'},
    ])

    const addGirlHandler = (newGirl) => {
      setGirlsKissed((prevGirlsKissed => [
        ...prevGirlsKissed,
        newGirl,
      ]))
    }

    const deleteGirlHandler = (girlId) => {
      setGirlsKissed((prevGirlsKissed) => 
        prevGirlsKissed.filter((girl) => girl.id !== girlId)
      )
    }

  return (
    <div>
        <h1 className='kissed-header'>Girls Kissed in 2024</h1>
        <NewGirl addGirl={addGirlHandler} />
        <KissedList girls={girlsKissed} onDeleteGirl={deleteGirlHandler} />
    </div>
  )
}

export default GirlsKissed