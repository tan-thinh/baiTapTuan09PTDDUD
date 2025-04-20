// File: todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Học Redux", completed: false },
  { id: 2, text: "Làm bài tập", completed: true },
  {id: 3, text: "Làm kiểm tra", completed: true}
];

let nextTodoId = 3;

const todoSlice = createSlice({
  name: "todos",
  initialState, // chính là todos: [...]
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

// Export action & reducer để dùng ở nơi khác
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
