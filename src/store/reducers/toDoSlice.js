import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    todoList: [],
    hideCompletedToDos: false,
    isDarkModeEnabled: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.todoList.push({
        id: uuidv4(),
        task: action.payload.newTask,
        isCompleted: false,
        isNewlyAdded: true,
      });
    },
    markAllToDosOld: (state) => {
      state.todoList = state.todoList.map((todoItem) => {
        return {
          ...todoItem,
          isNewlyAdded: false,
        };
      });
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTask: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    toggleHideCompletedToDos: (state) => {
      state.hideCompletedToDos = !state.hideCompletedToDos;
    },
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleHideCompletedToDos,
  markAllToDosOld,
  toggleDarkMode,
} = toDoSlice.actions;
export default toDoSlice.reducer;
