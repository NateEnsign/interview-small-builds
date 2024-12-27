import React, { useState } from 'react'
import './PlacesTraveled.css';
import PlaceList from './PlaceList';

const PlacesTraveled = () => {
    const [countries, setCountries] = useState([
        {id: 'c1', name: 'Canada'},
        {id: 'c2', name: 'Spain'},
        {id: 'c3', name: 'Honduras'},
    ])

  return (
    <div>
        <h1 className='places-header'>Places I have Traveled</h1>
        <PlaceList countries={countries} />
    </div>
  )
}

export default PlacesTraveled