import { lazy } from 'react';

const Todo = lazy(() =>
  import(/* webpackChunkName: 'todo' */ 'components/pages/Todo'),
);

const Todo2 = lazy(() =>
  import(/* webpackChunkName: 'todo2' */ 'components/pages/Todo2'),
);

export { Todo, Todo2 };
