import React, { useState } from "react";
import PeaksList from "./PeaksList";
import NewPeak from "./NewPeak";

import "./PeaksClimbed.css";

const PeaksClimbed = () => {
  const [peaksSummited, setPeaksSummited] = useState([
    { id: "p1", name: "Timponogas" },
    { id: "p2", name: `King's Peak` },
    { id: "p3", name: "Lone Peak" },
  ]);

  const addPeakHandler = (newPeak) => {
    setPeaksSummited((prevPeaksSummited) => {
      return [...prevPeaksSummited, newPeak];
    });
  };

  return (
    <div>
      <h1 className="peaks-header">Peaks I have Summited</h1>
      <NewPeak addPeak={addPeakHandler} />
      <PeaksList peaks={peaksSummited} />
    </div>
  );
};

export default PeaksClimbed;
