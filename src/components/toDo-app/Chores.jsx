import React, {useState} from 'react'

import ChoreList from './ChoreList';
import './Chores.css';

const Chores = () => {
    const [chores, setChores] = useState([
        {id: 'c1', title: 'Clean my room'},
        {id: 'c2', title: 'Go to the grocery store'},
        {id: 'c3', title: 'Make something crazy good for dinner'},
    ])

  return (
    <div>
        <h1 className='chores-header'>To do List</h1>
        <ChoreList chores={chores} />
    </div>
  )
}

export default Chores