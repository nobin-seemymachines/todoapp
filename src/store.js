import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/redux/todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
