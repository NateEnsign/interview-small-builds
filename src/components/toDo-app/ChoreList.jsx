import React from "react";

import "./ChoreList.css";

const ChoreList = ({ chores, deleteChore }) => {
  return (
    <ul className="chore-list">
      {chores.map(({id, title}) => (
        <li key={id}>
            <span>{title}</span>
            <button onClick={() => deleteChore(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ChoreList;
