import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ToggleSwitch from "../components/ToggleSwitch";
import {
  toggleDarkMode,
  toggleHideCompletedToDos,
} from "../store/reducers/toDoSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const { hideCompletedToDos, isDarkModeEnabled } = useSelector(
    (state) => state.toDo
  );

  return (
    <div className="settings">
      <h3 className="settings__heading">Settings</h3>

      <div className="settings__item">
        <p>Hide Completed TODOs</p>
        <ToggleSwitch
          checked={hideCompletedToDos}
          onChange={() => dispatch(toggleHideCompletedToDos())}
        />
      </div>

      <div className="settings__item">
        <p>Dark Mode</p>
        <ToggleSwitch
          checked={isDarkModeEnabled}
          onChange={() => dispatch(toggleDarkMode())}
        />
      </div>
    </div>
  );
};

export default Settings;
