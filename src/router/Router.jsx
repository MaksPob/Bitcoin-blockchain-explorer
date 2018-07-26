import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../scenes/Home/Home.jsx';
import ListBlocks from '../scenes/ListBlocks/ListBlocks.jsx';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/graphic' component={Home}/>
    <Route path='/listBlocks' component={ListBlocks}/>
  </Switch>
);

export default Router;