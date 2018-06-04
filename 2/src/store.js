import { decorate, observable, computed, action } from 'mobx';

class Store {
  constructor(memos) {
    this.route = {
      name: '',
      params: {},
    };
    this.memos = memos;
  }

  get currentRoute() {
    return {
      root: this.route.name === '/',
      items: this.route.name.startsWith('/items'),
      add: this.route.name === '/add',
    };
  }

  updateRoute(name, params) {
    const { route } = this;

    route.name = name;
    route.params = params;
  }
}

decorate(Store, {
  route: observable,
  memos: observable,
  currentRoute: computed,
  updateRoute: action,
});

export default Store;
