import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import { store } from './data';
import App from './App/App';

const entryId = 'root';
const appEntry = document.getElementById(entryId);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appEntry,
);
