import React from 'react'

import './KissedList.css';

const KissedList = ({data, deleteGirl}) => {
  return (
    <ul className='kissed-list'>
        {data.map(({id,name}) => <li key={id}>
            <span>{name}</span>
            <button onClick={() => deleteGirl(id)}>Delete</button>
        </li>)}
    </ul>
  )
}

export default KissedList