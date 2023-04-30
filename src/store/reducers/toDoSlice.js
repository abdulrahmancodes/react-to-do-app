import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todoList.push({
        id: uuidv4(),
        task: action.payload.newTask,
        isCompleted: false,
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
  },
});

export const { addTask, deleteTask, editTask } = toDoSlice.actions;
export default toDoSlice.reducer;
