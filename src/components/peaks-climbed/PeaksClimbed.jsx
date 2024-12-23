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

    const deletePeakHandler = (peakId) => {
        setSummits((prevSummits) => prevSummits.filter((peak) => peak.id !== peakId))
    }

  return (
    <div>
        <h1 className='peak-header'>Peaks I have Climbed</h1>
        <NewPeak addPeak={addPeakHandler} />
        <PeaksList summits={summits} deletePeak={deletePeakHandler} />
    </div>
  )
}

export default PeaksClimbed