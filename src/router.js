import React from "react";
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom"

import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

function CustomRouter({ location }) {
  return (
    <Switch>
      <Route exact path="/login" component={ Login }></Route>
      <Route path="/dashboard" component={ Dashboard }></Route>
    </Switch>
  );
}

export default withRouter( CustomRouter );