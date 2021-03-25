import React from 'react';
import * as H from 'history';
import { Switch, Route } from 'react-router-dom';
import { Todo } from 'components/pages';

type RoutesProps = {
  history?: H.History;
  location?: H.Location;
};

Routes.defaultProps = {
  history: null,
  location: null
};

export default function Routes(props: RoutesProps) {
  return (
    <Switch>
      <Route path={'/todo'} exact component={Todo} />
      <Route render={() => <div>not found</div>} />
    </Switch>
  );
}
