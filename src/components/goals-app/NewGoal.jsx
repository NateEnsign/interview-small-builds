import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = ({addGoal}) => {
  const [inputData, setInputData] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {id: Math.random.toString(), goal: inputData };

    addGoal(newData);
    setInputData('');
  };

  return (
    <form className="new-goal" onSubmit={submitHandler}>
      <input type="text" value={inputData} onChange={handleInput} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
