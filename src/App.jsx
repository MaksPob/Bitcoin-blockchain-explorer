import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import Router from './router/Router.jsx';

import './styles/style.scss';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);


export default App;