import React from "react";

import './PeaksList.css';

const PeaksList = ({ peaks, deletePeak }) => {
  return (
    <ul className="peak-list">
      {peaks.map((peak) => {
        return (
          <li key={peak.id}>
            <span>{peak.name}</span>
            <button onClick={() => deletePeak(peak.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default PeaksList;
