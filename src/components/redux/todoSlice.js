import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 0, title: "todo1", completed: false },
    { id: 1, title: "todo2", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newId =
        state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      const todo = {
        id: newId,
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    todoComplete: (state, action) => {
      const { key } = action.payload;
      const index = state.findIndex((todo) => todo.id === key);
      state[index].completed = !state[index].completed;
    },
    todoDelete: (state, action) => {
      const { key } = action.payload;
      return state.filter((todo) => todo.id !== key);
    },
  },
});

export const { addTodo, todoComplete,todoDelete } = todoSlice.actions;
export default todoSlice.reducer;
