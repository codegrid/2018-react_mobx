import React from 'react';
import { observer, inject } from 'mobx-react';
import ListView from '../component/list-view';

const Root = ({ domain }) => {
  return (
    <React.Fragment>
      <ListView
        count={3}
        memos={domain.memos}
        onClickDeleteMemo={memo => domain.deleteMemo(memo)}
      />
      <a href="#/items" className="root-button">すべて見る</a>
    </React.Fragment>
  );
};

export default inject('domain')(observer(Root));
