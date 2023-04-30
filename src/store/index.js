import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import toDoReducer, {
  addTask,
  deleteTask,
  editTask,
} from "./reducers/toDoSlice";

const test = createListenerMiddleware();

const saveToLocalStorage = (state) => {
  localStorage.setItem("todoList", JSON.stringify(state.toDo.todoList));
};

test.startListening({
  matcher: isAnyOf(addTask, deleteTask, editTask),
  effect: (action, { getState }) => saveToLocalStorage(getState()),
});

const loadFromLocalStorage = () => {
  try {
    const todoList = localStorage.getItem("todoList");
    return { toDo: { todoList: JSON.parse(todoList) } };
  } catch (error) {
    return { toDo: { todoList: [] } };
  }
};

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(test.middleware),
  preloadedState: loadFromLocalStorage(),
});
