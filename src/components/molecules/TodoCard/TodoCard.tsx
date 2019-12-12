import React, { FC } from 'react';
import { TodoType } from 'types/todo';

type TodoCardProps = {
  todo: TodoType;
};

const TodoCard: FC<TodoCardProps> = props => {
  return <div {...props}>{props.todo.text}</div>;
};

export default TodoCard;
