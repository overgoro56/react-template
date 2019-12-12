import { useState, useCallback, ChangeEvent, useReducer } from 'react';
import { TodoType } from 'types/todo';
import todoModule from 'modules/todoModule';

const initTodos: TodoType[] = [
  { text: 'todo1', done: false },
  { text: 'todo2', done: false },
];

const useTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>(initTodos);
  const [todoText, setTodoText] = useState<string>('page2');
  const [items, dispatch] = useReducer(todoModule.caseReducers.add);

  const handlePostTodo = useCallback(
    (text: string) => {
      console.log(todoModule);
      setTodos(prevTodos => prevTodos.concat({ text, done: false }));
    },
    [setTodos],
  );
  const handleChangeTodoText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTodoText(event.target.value);
    },
    [setTodoText],
  );

  return {
    todos,
    handlePostTodo,
    todoText,
    handleChangeTodoText,
  };
};

export default useTodo;
