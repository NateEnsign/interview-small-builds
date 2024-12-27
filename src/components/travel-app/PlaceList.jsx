import React from 'react'
import './PlaceList.css';

const PlaceList = ({countries, deleteCountry}) => {
  return (
    <div>
        <ul className='country-list'>
            {countries.map(({id,name}) => {
                return <li key={id}>
                    <span>{name}</span>
                    <button onClick={() => deleteCountry(id)}>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default PlaceList