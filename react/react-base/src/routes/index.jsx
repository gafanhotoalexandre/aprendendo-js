import { Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Page404 } from '../pages/Page404';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
