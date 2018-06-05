import React from 'react';
import { observer, inject } from 'mobx-react';
import NavLink from './component/nav-link';
import Root from './page/root';
import Items from './page/items';
import Add from './page/add';

const App = ({ ui }) => {
  const { currentRoute } = ui;

  let content = null;
  switch (true) {
    case currentRoute.root:
      content = <Root />;
      break;
    case currentRoute.items:
      content = <Items />;
      break;
    case currentRoute.add:
      content = <Add />;
      break;
    default:
  }

  return (
    <React.Fragment>
      <NavLink currentRoute={currentRoute} />
      <div className="contents">
        {content}
      </div>
    </React.Fragment>
  );
};

export default inject('ui')(observer(App));
