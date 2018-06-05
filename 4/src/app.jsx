import React from 'react';
import { observer } from 'mobx-react';
import NavLink from './component/nav-link';
import Root from './page/root';
import Items from './page/items';
import Add from './page/add';

const App = ({ ui, domain }) => {
  const { currentRoute } = ui;

  let content = null;
  switch (true) {
    case currentRoute.root:
      content = <Root domain={domain} />;
      break;
    case currentRoute.items:
      content = <Items domain={domain} />;
      break;
    case currentRoute.add:
      content = <Add domain={domain} />;
      break;
    default:
  }

  return (
    <React.Fragment>
      <NavLink ui={ui} />
      <div className="contents">
        {content}
      </div>
    </React.Fragment>
  );
};

export default observer(App);
