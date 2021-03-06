import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import DashBoard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/" component={SingUp} />

    <Route path="/dashboard" component={DashBoard} isPrivate />
  </Switch>
);

export default Routes;
