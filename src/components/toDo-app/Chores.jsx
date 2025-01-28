import React, {useState} from 'react'

import NewChore from './NewChore';
import ChoreList from './ChoreList';
import './Chores.css';

const Chores = () => {
    const [chores, setChores] = useState([
        {id: 'c1', title: 'Clean my room'},
        {id: 'c2', title: 'Go to the grocery store'},
        {id: 'c3', title: 'Make something crazy good for dinner'},
    ])


    const handleDeleteChore = (choreId) => {
        setChores(prevChores => prevChores.filter(chore => chore.id !== choreId)) 
    }

    const handleAddchore = (newChore) => {
        setChores(prevChores => [...prevChores, newChore])
    }

  return (
    <div>
        <h1 className='chores-header'>To do List</h1>
        <NewChore addChore={handleAddchore} />
        <ChoreList chores={chores} deleteChore={handleDeleteChore} />
    </div>
  )
}

export default Chores