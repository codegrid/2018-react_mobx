import React from 'react';
import { observer } from 'mobx-react';
import ListView from '../component/list-view';
import EditorView from '../component/editor-view';

const Items = ({ store }) => (
  <div className="layout-items">
    <div className="layout-items-left">
      <ListView
        memos={store.memos}
        onClickEditMemo={memo => location.hash = `/items/${memo.id}`}
        onClickDeleteMemo={memo => store.deleteMemo(memo)}
      />
    </div>
    {store.editMemo && (
      <div className="layout-items-left">
        <EditorView
          editMemo={store.editMemo}
          onClickSave={memo => {
            store.updateMemo(memo);
            location.hash = '/items';
          }}
          onClickCancel={() => location.hash = '/items'}
        />
      </div>
    )}
  </div>
);

export default observer(Items);
