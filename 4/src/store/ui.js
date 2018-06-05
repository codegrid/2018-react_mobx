import { decorate, observable, computed, action } from 'mobx';

class UiStore {
  constructor() {
    this.route = {
      name: '',
      params: {},
    };
  }

  get currentRoute() {
    return {
      root: this.route.name === '/',
      items: this.route.name.startsWith('/items'),
      add: this.route.name === '/add',
    };
  }

  get editMemoId() {
    if (!this.currentRoute.items) {
      return null;
    }

    const { id } = this.route.params;
    if (!id) {
      return null;
    }

    return id;
  }

  updateRoute(name, params) {
    const { route } = this;

    route.name = name;
    route.params = params;
  }
}

decorate(UiStore, {
  route: observable,
  currentRoute: computed.struct,
  editMemoId: computed,
  updateRoute: action,
});

export default UiStore;
