import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../scenes/Home/Home.jsx';
import ListBlocks from '../scenes/ListBlocks/ListBlocks.jsx';
import Block from '../scenes/Block/Block.jsx';

import { store } from '../redux/store/store';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
export const middleware = routerMiddleware(history);

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/graphic' component={Home}/>
      <Route path='/listBlocks' component={ListBlocks}/>
      <Route path='/block/:number' component={Block}/>
    </Switch>
  </ConnectedRouter>
);

export default Router;