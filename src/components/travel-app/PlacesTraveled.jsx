import React, { useState } from 'react'
import './PlacesTraveled.css';
import PlaceList from './PlaceList';
import NewPlace from './NewPlace';

const PlacesTraveled = () => {
    const [countries, setCountries] = useState([
        {id: 'c1', name: 'Canada'},
        {id: 'c2', name: 'Spain'},
        {id: 'c3', name: 'Honduras'},
    ])

    const handleAddNewCountry = (newCountry) => {
        setCountries((prevCountries) => [
            ...prevCountries,
            newCountry,
        ])
    }

    const handleDeleteCountry = (countryId) => {
        setCountries((prevCountries) => prevCountries.filter((country) => country.id !== countryId))
    }

  return (
    <div>
        <h1 className='places-header'>Places I have Traveled</h1>
        <NewPlace addCountry={handleAddNewCountry} />
        <PlaceList countries={countries} deleteCountry={handleDeleteCountry} />
    </div>
  )
}

export default PlacesTraveled