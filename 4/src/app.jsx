import React from 'react';
import { observer } from 'mobx-react';
import NavLink from './component/nav-link';
import Root from './page/root';
import Items from './page/items';
import Add from './page/add';

const App = ({ store }) => {
  const { currentRoute } = store;

  let content = null;
  switch (true) {
    case currentRoute.root:
      content = <Root store={store} />;
      break;
    case currentRoute.items:
      content = <Items store={store} />;
      break;
    case currentRoute.add:
      content = <Add store={store} />;
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
