import React, { useState } from 'react'
import PeaksList from './PeaksList';

import './PeaksClimbed.css';

const PeaksClimbed = () => {
    const [peaksSummited, setPeaksSummited] = useState([
        {id: 'p1', name: 'Timponogas'},
        {id: 'p2', name: `King's Peak`},
        {id: 'p3', name: 'Lone Peak'},
    ])

  return (
    <div>
        <h1 className='peaks-header'>Peaks I have Summited</h1>
        <PeaksList peaks={peaksSummited} />
    </div>
  )
}

export default PeaksClimbed
