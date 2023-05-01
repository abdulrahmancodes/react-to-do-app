import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import toDoReducer, {
  addTask,
  deleteTask,
  editTask,
  markAllToDosOld,
  toggleDarkMode,
  toggleHideCompletedToDos,
} from "./reducers/toDoSlice";

const todoListListener = createListenerMiddleware();
const toDoSettingsListener = createListenerMiddleware();
const darkModeListener = createListenerMiddleware();

const saveToLocalStorage = (state, key) => {
  localStorage.setItem(key, JSON.stringify(state.toDo[key]));
};

todoListListener.startListening({
  matcher: isAnyOf(addTask, deleteTask, editTask, markAllToDosOld),
  effect: (action, { getState }) => saveToLocalStorage(getState(), "todoList"),
});

toDoSettingsListener.startListening({
  matcher: isAnyOf(toggleHideCompletedToDos),
  effect: (action, { getState }) =>
    saveToLocalStorage(getState(), "hideCompletedToDos"),
});

darkModeListener.startListening({
  matcher: isAnyOf(toggleDarkMode),
  effect: (action, { getState }) =>
    saveToLocalStorage(getState(), "isDarkModeEnabled"),
});

const getToDoListFromLS = () => {
  try {
    const todoList = localStorage.getItem("todoList");
    return JSON.parse(todoList) || [];
  } catch (error) {
    return [];
  }
};

const getSettingsFromLS = (key) => {
  try {
    const todoList = localStorage.getItem(key);
    return !!JSON.parse(todoList);
  } catch (error) {
    return false;
  }
};

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      todoListListener.middleware,
      toDoSettingsListener.middleware,
      darkModeListener.middleware,
    ]),
  preloadedState: {
    toDo: {
      todoList: getToDoListFromLS(),
      hideCompletedToDos: getSettingsFromLS("hideCompletedToDos"),
      isDarkModeEnabled: getSettingsFromLS("isDarkModeEnabled"),
    },
  },
});
