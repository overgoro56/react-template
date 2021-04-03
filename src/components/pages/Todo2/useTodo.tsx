import { useState, useCallback, ChangeEvent } from 'react';

const initTodos: Todo[] = [
  { text: 'todo1', done: false },
  { text: 'todo2', done: false },
];

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [todoText, setTodoText] = useState<string>('');

  const handlePostTodo = useCallback(
    (text: string) => {
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
