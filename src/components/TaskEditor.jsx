import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { editTask } from "../store/reducers/toDoSlice";

import { BsCheck2 } from "react-icons/bs";

const TaskEditor = ({ toDoItem, toggleIsEdit }) => {
  const dispatch = useDispatch();

  const submitBtnRef = useRef();
  const [inputValue, setInputValue] = useState(toDoItem.task);

  const handleBlur = useCallback(
    (e) => {
      if (e.relatedTarget !== submitBtnRef.current) {
        toggleIsEdit();
      }
    },
    [submitBtnRef, toggleIsEdit]
  );

  const updateTask = useCallback(() => {
    dispatch(
      editTask({
        ...toDoItem,
        task: inputValue,
      })
    );
    toggleIsEdit();
  }, [inputValue, toDoItem, toggleIsEdit]);

  return (
    <div className="tasks-list__task">
      <div className="tasks-list__task__left">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="tasks-list__task__name-editor"
          onBlur={handleBlur}
          autoFocus
        />
      </div>

      <div className="tasks-list__task__right">
        <button
          className="submit-btn"
          ref={submitBtnRef}
          disabled={!inputValue}
        >
          <BsCheck2 className="check-icon" onClick={updateTask} />
        </button>
      </div>
    </div>
  );
};

export default TaskEditor;
