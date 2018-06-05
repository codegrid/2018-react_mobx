import { decorate, observable, action } from 'mobx';

class DomainStore {
  constructor(memos) {
    this.memos = memos;
    this.editMemo = null;
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

  setEditMemo(id) {
    if (id === null) {
      this.editMemo = null;
      return;
    }
    const editMemo = this.memos.find(memo => (memo.id|0) === (id|0));
    this.editMemo = editMemo || null;
  }
}

decorate(DomainStore, {
  memos: observable,
  editMemo: observable,
  saveNewMemo: action,
  deleteMemo: action,
  updateMemo: action,
  setEditMemo: action,
});

export default DomainStore;
