import React from 'react';
import { observer } from 'mobx-react';

const ListItem = ({ memo, onClickDeleteMemo }) => (
  <div className="list-item">
    <div>
      <span>id</span>：<span>{memo.id}</span>
    </div>
    <div>
      <span>text</span>：<span>{memo.text}</span>
    </div>
    <div>
      <span>date</span>：<span>{memo.date}</span>
    </div>
    <div>
      <span>tags</span>：<span>
        {memo.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
      </span>
    </div>
    <div>
      <button onClick={() => onClickDeleteMemo(memo)}>削除</button>
    </div>
  </div>
);

export default observer(ListItem);
