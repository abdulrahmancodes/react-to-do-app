import React, { useState, useCallback } from "react";

import TaskEditor from "./TaskEditor";
import TaskDetails from "./TaskDetails";

const Task = ({ toDoItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  if (isEditing) {
    return <TaskEditor toggleIsEdit={toggleIsEdit} toDoItem={toDoItem} />;
  } else {
    return (
      <TaskDetails
        toggleIsEdit={toggleIsEdit}
        toDoItem={toDoItem}
        isEditing={isEditing}
      />
    );
  }
};

export default Task;
