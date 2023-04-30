import React from "react";

const ToggleSwitch = ({ ...props }) => {
  return (
    <label className="toggle-switch-container">
      <input type="checkbox" {...props} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
