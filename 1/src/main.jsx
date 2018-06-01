import { autorun } from 'mobx';
import Store from './store';
import { initRouter } from './router';

const store = new Store();
initRouter((name, params) => store.updateRoute(name, params));

const $root = document.getElementById('app');

autorun(() => {
  const { name, params } = store.route;

  $root.innerHTML = `
  <div style="text-align: center;">
    <p>現在のルート: ${name}</p>
    ${['#/', '#/items', '#/items/22', '#/add'].map(hash => `
      <a href="${hash}">[${hash}]</a>
    `).join(' | ')}
  </div>
  `;

  console.log(`route changed to ${name} with ${JSON.stringify(params)}`);
});


