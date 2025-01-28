import React from "react";

import "./ChoreList.css";

const ChoreList = ({ chores }) => {
  return (
    <ul className="chore-list">
      {chores.map(({id, title}) => (
        <li key={id}>
            <span>{title}</span>
            <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ChoreList;
