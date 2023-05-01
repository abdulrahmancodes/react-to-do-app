import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tooltip } from "react-tooltip";
import cx from "classnames";

import { deleteTask, editTask } from "../store/reducers/toDoSlice";

import Checkbox from "./Checkbox";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TaskDetails = ({ toDoItem, toggleIsEdit, isEditing }) => {
  const dispatch = useDispatch();
  const { hideCompletedToDos } = useSelector((state) => state.toDo);

  const [isCompleted, setIsCompleted] = useState(toDoItem.isCompleted);
  const [isTaskBeingDeleted, setIsTaskBeingDeleted] = useState(false);

  const handleTaskDeletion = useCallback(() => {
    setIsTaskBeingDeleted(true);
    setTimeout(() => {
      dispatch(deleteTask({ id: toDoItem.id }));
    }, 500);
  }, [toDoItem, dispatch]);

  const toggleIsCompleted = useCallback(() => {
    setIsCompleted(!isCompleted);

    setTimeout(() => {
      dispatch(
        editTask({
          ...toDoItem,
          isCompleted: !isCompleted,
        })
      );
    }, 1000);
  }, [isCompleted, dispatch, toDoItem]);

  return (
    <div
      className={cx("tasks-list__task", {
        "slide-out-right": isTaskBeingDeleted,
        "slide-in-left": toDoItem.isNewlyAdded,
        "scale-out-center": hideCompletedToDos && isCompleted,
      })}
      data-tooltip-id={toDoItem.id}
      data-tooltip-content={toDoItem.task}
      data-tooltip-place="bottom"
    >
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
      {toDoItem.task.length > 67 && (
        <Tooltip id={toDoItem.id} className="tooltip" />
      )}
    </div>
  );
};

export default TaskDetails;
