import React, { FC } from 'react';
import { TodoCard } from 'components/molecules';

const Todo: FC = props => {
  return (
    <div>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
};

export default Todo;
