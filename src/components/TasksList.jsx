import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import EmptyState from "./EmptyState";
import Task from "./Task";

const TasksList = () => {
  const { todoList, hideCompletedToDos } = useSelector((state) => state.toDo);

  const [filteredToDos, setFilteredToDos] = useState(todoList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredToDosList = todoList.filter(({ task, isCompleted }) => {
      const doesContainSearchText = task
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());

      if (!hideCompletedToDos) {
        return doesContainSearchText;
      }

      return doesContainSearchText && !isCompleted;
    });
    setFilteredToDos(filteredToDosList);
  }, [searchText, todoList, hideCompletedToDos]);

  return (
    <div className="tasks-list">
      <h3 className="tasks-list__heading">TODO List</h3>
      {!!todoList.length && (
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      )}
      {filteredToDos.length ? (
        <ToDoList filteredToDos={filteredToDos} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

const ToDoList = ({ filteredToDos }) => {
  return (
    <>
      {filteredToDos.map((todoItem, i) => (
        <Task key={i} toDoItem={todoItem} />
      ))}
    </>
  );
};

export default TasksList;
