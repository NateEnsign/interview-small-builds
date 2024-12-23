import React from "react";
import './KissedList.css';

const KissedList = ({ girls, onDeleteGirl }) => {
  return (
    <div>
      <ul className="kissed-list">
       {girls.map(({id, name}) => {
        return <li key={id}>
          <span>{name}</span>
          <button onClick={() => onDeleteGirl(id)}>Delete</button>
        </li>
       })}
      </ul>
    </div>
  );
};

export default KissedList;
