import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import cx from "classnames";

import { editTask } from "../store/reducers/toDoSlice";

import { BsCheck2 } from "react-icons/bs";

const TaskEditor = ({ toDoItem, toggleIsEdit }) => {
  const dispatch = useDispatch();

  const submitBtnRef = useRef();
  const [inputValue, setInputValue] = useState(toDoItem.task);

  const handleBlur = useCallback(
    (e) => {
      if (
        e.relatedTarget !== submitBtnRef.current ||
        e.relatedTarget.classList.contains("check-icon")
      ) {
        toggleIsEdit();
      }
    },
    [submitBtnRef, toggleIsEdit]
  );

  const updateTask = useCallback(() => {
    if (!inputValue) {
      return;
    }

    dispatch(
      editTask({
        ...toDoItem,
        task: inputValue,
      })
    );
    toggleIsEdit();
  }, [inputValue, toDoItem, toggleIsEdit, dispatch]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        updateTask();
      }
    },
    [updateTask]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      className={cx("tasks-list__task", {
        "tasks-list__task--empty": !inputValue.trim(),
      })}
    >
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
          disabled={!inputValue.trim()}
        >
          <BsCheck2 className="check-icon" onClick={updateTask} />
        </button>
      </div>
    </div>
  );
};

export default TaskEditor;
