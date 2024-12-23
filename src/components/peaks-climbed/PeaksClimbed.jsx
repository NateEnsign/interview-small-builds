import React, { useState } from 'react';
import './PeaksClimbed.css';
import PeaksList from './PeaksList';
import NewPeak from './NewPeak';

const PeaksClimbed = () => {
    const [summits, setSummits] = useState([
        {id: 's1', peak: 'Timpanogos'},
        {id: 's2', peak: 'Lone Peak'},
        {id: 's3', peak: `King's Peak`},
    ])

    const addPeakHandler = (newPeak) => {
        setSummits(prevSummits => [
            ...prevSummits,
            newPeak,
        ])
    }

  return (
    <div>
        <h1 className='peak-header'>Peaks I have Climbed</h1>
        <NewPeak addPeak={addPeakHandler} />
        <PeaksList summits={summits} />
    </div>
  )
}

export default PeaksClimbed