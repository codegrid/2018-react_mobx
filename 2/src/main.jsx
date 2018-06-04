import React from 'react';
import { render } from 'react-dom';
import Store from './store';
import { initRouter } from './router';
import App from './app';
import memos from './memos.json';

const store = new Store(memos);
initRouter((name, params) => store.updateRoute(name, params));

render(
  <App store={store} />,
  document.getElementById('app')
);
