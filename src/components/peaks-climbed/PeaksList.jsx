import React from 'react';
import './PeakList.css';

const PeaksList = ({summits, addPeak}) => {
 

  return (
    <div>
        <ul className='peak-list'>
           {summits.map(({id,peak}) => 
            <li key={id}>
                <span>{peak}</span>
                <button>Delete</button>
            </li>
           )}
        </ul>
    </div>
  )
}

export default PeaksList
