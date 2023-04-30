import React from "react";

import ToggleSwitch from "../components/ToggleSwitch";

const Settings = () => {
  return (
    <div className="settings">
      <h3 className="settings__heading">Settings</h3>

      <div className="settings__item">
        <p>Hide Complete TODOs</p>
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Settings;
