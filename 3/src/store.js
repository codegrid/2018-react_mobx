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

  saveNewMemo(draft) {
    const lastId = this.memos[this.memos.length - 1].id;
    draft.id = lastId + 1;
    this.memos.push(draft);
  }
}

decorate(Store, {
  route: observable,
  memos: observable,
  currentRoute: computed,
  updateRoute: action,
  saveNewMemo: action,
});

export default Store;
