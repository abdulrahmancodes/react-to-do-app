import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import cx from "classnames";

import { deleteTask, editTask } from "../store/reducers/toDoSlice";

import Checkbox from "./Checkbox";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TaskDetails = ({ toDoItem, toggleIsEdit, isEditing }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(toDoItem.isCompleted);

  const handleTaskDeletion = useCallback(() => {
    dispatch(deleteTask({ id: toDoItem.id }));
  }, [toDoItem]);

  const toggleIsCompleted = useCallback(() => {
    setIsCompleted(!isCompleted);
    dispatch(
      editTask({
        ...toDoItem,
        isCompleted: !isCompleted,
      })
    );
  }, [isCompleted]);

  return (
    <div className="tasks-list__task">
      <div className="tasks-list__task__left">
        <Checkbox
          isChecked={isCompleted}
          onChange={toggleIsCompleted}
          disabled={isEditing}
        />
        <p
          className={cx("tasks-list__task__name", {
            "tasks-list__task__name--completed": isCompleted,
          })}
        >
          {toDoItem.task}
        </p>
      </div>
      <div className="tasks-list__task__right">
        <div className="tasks-list__task__action-icons">
          {!isCompleted && <AiOutlineEdit onClick={toggleIsEdit} />}
          <AiOutlineDelete onClick={handleTaskDeletion} />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
