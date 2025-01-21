import React, { useState } from "react";

import KissedList from "./KissedList";

import "./GirlsKissed.css";

const GirlsKissed = () => {
  const [kissedData, setKissedData] = useState([
    { id: "g1", name: "Mykala Steadman" },
    { id: "g2", name: "Sarah Pothead" },
    { id: "g3", name: "Meagan Bolton" },
    { id: "g4", name: "Kacey Savage" },
    { id: "g5", name: "Hilma Povanhu" },
  ]);

  const handleDeleteGilr = (girlId) => {
    setKissedData(prevKissedData => prevKissedData.filter((girl) => girl.id !== girlId))
  }

  return (
    <div>
      <h1 className="kissed-header">Girls I have kissed in 2024</h1>
      <KissedList data={kissedData} deleteGirl={handleDeleteGilr} />
    </div>
  );
};

export default GirlsKissed;
