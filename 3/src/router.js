import Router from 'navigo';

const routes = [
  '/',
  '/items',
  '/items/:id',
  '/add',
];

export function initRouter(callback) {
  const router = new Router(null, true);

  for (const route of routes) {
    router.on(
      route,
      params => callback(route, params || {})
    );
  }

  router.resolve();

  return router;
}
