import React from 'react'

const CountryList = ( {countryList }) => {
  return (
    <div>
        <ul className='country-list'>
            {
                countryList.map(country => {
                    return <li key={country.id}>
                        <span>{country.name}</span>
                        <button>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default CountryList