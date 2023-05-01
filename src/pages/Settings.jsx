import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ToggleSwitch from "../components/ToggleSwitch";
import { toggleHideCompletedToDos } from "../store/reducers/toDoSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const { hideCompletedToDos } = useSelector((state) => state.toDo);

  return (
    <div className="settings">
      <h3 className="settings__heading">Settings</h3>

      <div className="settings__item">
        <p>Hide Complete TODOs</p>
        <ToggleSwitch
          checked={hideCompletedToDos}
          onChange={() => dispatch(toggleHideCompletedToDos())}
        />
      </div>
    </div>
  );
};

export default Settings;
