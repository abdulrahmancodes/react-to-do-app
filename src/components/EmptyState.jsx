import React from "react";
import { BsFillBoxFill } from "react-icons/bs";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <BsFillBoxFill className="empty-state-icon" />
      <p>Nothing To Show</p>
    </div>
  );
};

export default EmptyState;
