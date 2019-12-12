import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from 'types/todo';

const initTodos: TodoType[] = [
  { text: 'todo1', done: false },
  { text: 'todo2', done: false },
];

const todoModule = createSlice({
  name: 'todo',
  initialState: initTodos,
  reducers: {
    add: (state, action: PayloadAction<TodoType>) => {
      const target = action.payload;
      return state.concat(target);
    },
  },
});

export default todoModule;
