import React from 'react';
import { render } from 'react-dom';
import Store from './store';
import { initRouter } from './router';
import App from './app';

const store = new Store();
initRouter((name, params) => store.updateRoute(name, params));

render(
  <App store={store} />,
  document.getElementById('app')
);
