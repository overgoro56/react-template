import React from 'react';
import { Todo } from 'components/organisms';
import useTodo from './useTodo';

const TodoPage: React.FC = () => {
  const { todos, handlePostTodo, todoText, handleChangeTodoText } = useTodo();
  return (
    <div>
      <Todo
        todos={todos}
        onPostClick={handlePostTodo}
        todoText={todoText}
        handleChangeTodoText={handleChangeTodoText}
      />
    </div>
  );
};

export default TodoPage;
