import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Outdoor from './../src/pages/outdoor';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Outdoor} />
      </Switch>
    </BrowserRouter>
  )
}