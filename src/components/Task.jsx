import React, { useState, useCallback } from "react";

import TaskEditor from "./TaskEditor";
import TaskDetails from "./TaskDetails";

import "react-tooltip/dist/react-tooltip.css";

const Task = ({ toDoItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  if (isEditing) {
    return (
      <TaskEditor
        toggleIsEdit={toggleIsEdit}
        toDoItem={toDoItem}
        key={toDoItem.id}
      />
    );
  } else {
    return (
      <TaskDetails
        toggleIsEdit={toggleIsEdit}
        toDoItem={toDoItem}
        isEditing={isEditing}
        key={toDoItem.id}
      />
    );
  }
};

export default Task;
