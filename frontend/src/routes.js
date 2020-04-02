import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Outdoor from './../src/pages/outdoor';
import Register from './../src/pages/register';
import Login from './../src/pages/login';
import Home from './../src/pages/home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Outdoor} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}