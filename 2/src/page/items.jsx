import React from 'react';
import { observer } from 'mobx-react';
import ListView from '../component/list-view';

const Items = ({ store }) => (
  <div className="layout-items">
    <div className="layout-items-left">
      <ListView
        memos={store.memos}
      />
    </div>
  </div>
);

export default observer(Items);
