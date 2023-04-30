import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Task from "./Task";

const TasksList = () => {
  const { todoList } = useSelector((state) => state.toDo);

  const [filteredToDos, setFilteredToDos] = useState(todoList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredToDosList = todoList.filter(({ task }) =>
      task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setFilteredToDos(filteredToDosList);
  }, [searchText, todoList]);

  return (
    <div className="tasks-list">
      <h3 className="tasks-list__heading">TODO List</h3>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {filteredToDos.map((todoItem, i) => (
        <Task key={i} toDoItem={todoItem} />
      ))}
    </div>
  );
};

export default TasksList;
