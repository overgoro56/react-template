import React from 'react';
import * as H from 'history';
import { Switch, Route } from 'react-router-dom';
import { Todo, Todo2 } from 'components/pages';

type RoutesProps = {
  history?: H.History;
  location?: H.Location;
};

export default function Routes(props: RoutesProps) {
  return (
    <Switch>
      <Route path={'/todo'} exact component={Todo} />
      <Route path={'/todo2'} exact component={Todo2} />
      <Route render={() => <div>not found</div>} />
    </Switch>
  );
}
