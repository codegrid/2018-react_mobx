import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Store from './store';
import { initRouter } from './router';
import App from './app';
import memos from './memos.json';

const store = new Store(memos);
initRouter((name, params) => store.ui.updateRoute(name, params));

render(
  <Provider
    domain={store.domain}
    ui={store.ui}
  >
    <App />
  </Provider>,
  document.getElementById('app')
);
