import React from 'react'
import './PlaceList.css';

const PlaceList = ({countries}) => {
  return (
    <div>
        <ul className='country-list'>
            {countries.map(({id,name}) => {
                return <li key={id}>
                    <span>{name}</span>
                    <button>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default PlaceList