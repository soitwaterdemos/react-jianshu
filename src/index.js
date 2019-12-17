import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import Router from './router/index.js'

import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.render(
  (
    <Provider store={ store }>
      <Router />
    </Provider>
  ),
  document.getElementById('root')
);
