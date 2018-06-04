import React from 'react';
import { observer } from 'mobx-react';
import ListItem from './list-item';

const ListView = ({ count = 0, memos }) => {
  memos = memos.slice(count * -1).reverse();

  return (
    <div className="list-view">
      {memos.length === 0 && (
        <div>
          表示できるメモがありません。
        </div>
      )}
      {memos.map(memo => (
        <ListItem
          key={memo.id}
          memo={memo}
        />
      ))}
    </div>
  );
};

export default observer(ListView);
