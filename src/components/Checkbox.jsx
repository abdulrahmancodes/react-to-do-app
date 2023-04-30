import React from "react";

const Checkbox = ({ isChecked, ...props }) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={isChecked} {...props} />
      <span className="checkmark" />
    </label>
  );
};

export default Checkbox;
