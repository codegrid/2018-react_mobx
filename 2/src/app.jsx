import React from 'react';
import { observer } from 'mobx-react';
import NavLink from './component/nav-link';

const App = ({ store }) => {
  const { currentRoute } = store;

  let content = null;
  switch (true) {
    case currentRoute.root:
      content = <div>ルート</div>;
      break;
    case currentRoute.items:
      content = <div>一覧</div>;
      break;
    case currentRoute.add:
      content = <div>追加</div>;
      break;
    default:
  }

  return (
    <React.Fragment>
      <NavLink store={store} />
      <div className="contents">
        {content}
      </div>
    </React.Fragment>
  );
};

export default observer(App);
