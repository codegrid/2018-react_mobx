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

  get editMemo() {
    if (!this.currentRoute.items) {
      return null;
    }

    const { id } = this.route.params;
    if (!id) {
      return null;
    }

    const editMemo = this.memos.find(memo => (memo.id|0) === (id|0));
    if (!editMemo) {
      return null;
    }

    return editMemo;
  }

  updateRoute(name, params) {
    const { route } = this;

    route.name = name;
    route.params = params;
  }

  saveNewMemo(draft) {
    const lastMemo = this.memos[this.memos.length - 1];
    const lastId = lastMemo ? lastMemo.id : 0;
    draft.id = lastId + 1;
    this.memos.push(draft);
  }

  deleteMemo(memo) {
    this.memos.remove(memo);
  }

  updateMemo(uMemo) {
    const idx = this.memos.findIndex(memo => memo.id === uMemo.id);
    this.memos.splice(idx, 1, uMemo);
  }
}

decorate(Store, {
  route: observable,
  memos: observable,
  currentRoute: computed,
  editMemo: computed,
  updateRoute: action,
  saveNewMemo: action,
  deleteMemo: action,
  updateMemo: action,
});

export default Store;
