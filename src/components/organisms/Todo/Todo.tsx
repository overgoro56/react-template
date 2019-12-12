import React, { FC, ChangeEvent } from 'react';
import { TodoCard } from 'components/molecules';
import { Button, TextInput } from 'components/atoms';
import { TodoType } from 'types/todo';

type TodoProps = {
  todos: TodoType[];
  todoText: string;
  onPostClick: (text: string) => void;
  handleChangeTodoText: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Todo: FC<TodoProps> = props => {
  return (
    <div>
      <div>
        <TextInput
          value={props.todoText}
          onChange={props.handleChangeTodoText}
        />
        <Button onClick={() => props.onPostClick(props.todoText)}>
          {' '}
          button{' '}
        </Button>
      </div>
      {props.todos.map((todo: TodoType) => {
        return <TodoCard todo={todo} />;
      })}
    </div>
  );
};

export default Todo;
