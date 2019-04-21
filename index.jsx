import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const prod = process.env.NODE_ENV;
ReactDOM.render((
  <HashRouter>
      <App />
  </HashRouter>
  ),document.getElementById('root')
);