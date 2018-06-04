import React from 'react';
import { observer } from 'mobx-react';
import ListView from '../component/list-view';

const Root = ({ store }) => {
  return (
    <React.Fragment>
      <ListView
        count={3}
        memos={store.memos}
      />
      <a href="#/items" className="root-button">すべて見る</a>
    </React.Fragment>
  );
};

export default observer(Root);
