import { reaction } from 'mobx';
import UiStore from './store/ui';
import DomainStore from './store/domain';

class Store {
  constructor(memos) {
    this.ui = new UiStore();
    this.domain = new DomainStore(memos);

    this._initReactions();
  }

  _initReactions() {
    reaction(
      () => this.ui.editMemoId,
      id => this.domain.setEditMemo(id),
    );
  }
}

export default Store;
