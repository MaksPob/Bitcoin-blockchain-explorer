import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../scenes/Home/Home.jsx';
import ListBlocks from '../scenes/ListBlocks/ListBlocks.jsx';
import Block from '../scenes/Block/Block.jsx';
import Transaction from '../scenes/Transaction/Transaction.jsx';
import BlockByHeight from '../scenes/BlockByHeight/BlockByHeight.jsx';
import ChartLastBlocks from '../scenes/Chart/Chart.jsx';

import { store } from '../redux/store/store';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';


const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/graphic' component={ChartLastBlocks}/>
      <Route path='/listBlocks' component={ListBlocks}/>
      <Route path='/block/:number' component={Block}/>
      <Route path='/transaction/:hash' component={Transaction}/>
      <Route path='/block-height/:number' component={BlockByHeight}/>
    </Switch>
  </ConnectedRouter>
);

export default Router;

export const history = createBrowserHistory();
export const middleware = routerMiddleware(history);