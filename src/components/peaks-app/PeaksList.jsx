import React from "react";

import './PeaksList.css';

const PeaksList = ({ peaks }) => {
  return (
    <ul className="peak-list">
      {peaks.map((peak) => {
        return (
          <li>
            <span>{peak.name}</span>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default PeaksList;
