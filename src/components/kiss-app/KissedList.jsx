import React from "react";
import './KissedList.css';

const KissedList = ({ kissedList }) => {
  return (
    <div>
      <ul className="kissed-list">
        {kissedList.map((girl) => {
          return <li key={girl.id}>{girl.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default KissedList;
