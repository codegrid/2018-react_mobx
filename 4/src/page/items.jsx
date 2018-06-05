import React from 'react';
import { observer } from 'mobx-react';
import ListView from '../component/list-view';
import EditorView from '../component/editor-view';

const Items = ({ domain }) => (
  <div className="layout-items">
    <div className="layout-items-left">
      <ListView
        memos={domain.memos}
        onClickEditMemo={memo => location.hash = `/items/${memo.id}`}
        onClickDeleteMemo={memo => domain.deleteMemo(memo)}
      />
    </div>
    {domain.editMemo !== null && (
      <div className="layout-items-left">
        <EditorView
          editMemo={domain.editMemo}
          onClickSave={memo => {
            domain.updateMemo(memo);
            location.hash = '/items';
          }}
          onClickCancel={() => location.hash = '/items'}
        />
      </div>
    )}
  </div>
);

export default observer(Items);
