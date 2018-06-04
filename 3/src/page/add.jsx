import React from 'react';
import { observer } from 'mobx-react';
import EditorView from '../component/editor-view';

const Add = ({ store }) => (
  <EditorView
    onClickSave={memo => {
      store.saveNewMemo(memo);
      location.hash = '/items';
    }}
    onClickCancel={() => location.hash = '/items'}
  />
);

export default observer(Add);
