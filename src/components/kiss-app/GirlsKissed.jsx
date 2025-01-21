import React, { useState } from "react";

import KissedList from "./KissedList";
import NewGirl from "./NewGirl";

import "./GirlsKissed.css";

const GirlsKissed = () => {
  const [kissedData, setKissedData] = useState([
    { id: "g1", name: "Mykala Steadman" },
    { id: "g2", name: "Sarah Pothead" },
    { id: "g3", name: "Meagan Bolton" },
    { id: "g4", name: "Kacey Savage" },
    { id: "g5", name: "Hilma Povanhu" },
  ]);

  const handleDeleteGirl = (girlId) => {
    setKissedData(prevKissedData => prevKissedData.filter((girl) => girl.id !== girlId))
  }

  const handleAddGirl = (newData) => {
    setKissedData((prevKissedData) => [...prevKissedData, newData])
  }

  return (
    <div>
      <h1 className="kissed-header">Girls I have kissed in 2024</h1>
      <NewGirl addGirl={handleAddGirl} />
      <KissedList data={kissedData} deleteGirl={handleDeleteGirl} />
    </div>
  );
};

export default GirlsKissed;
