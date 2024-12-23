import React from 'react';
import './PeakList.css';

const PeaksList = ({summits, deletePeak}) => {
 

  return (
    <div>
        <ul className='peak-list'>
           {summits.map(({id,peak}) => 
            <li key={id}>
                <span>{peak}</span>
                <button onClick={() => deletePeak(id) }>Delete</button>
            </li>
           )}
        </ul>
    </div>
  )
}

export default PeaksList
