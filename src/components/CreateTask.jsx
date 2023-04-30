import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../store/reducers/toDoSlice";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(addTask({ newTask: inputValue }));
      setInputValue("");
    },
    [inputValue]
  );

  return (
    <div className="create-task">
      <h3 className="create-task__heading">Create A New To Do</h3>

      <form className="create-task__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo"
          value={inputValue}
          onChange={handleInputChange}
          className="homepage__create-todo__input"
        />
        <button type="submit" disabled={!inputValue}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
