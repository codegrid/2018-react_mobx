import React from 'react';
import { observer } from 'mobx-react';
import Root from './root';
import Items from './items';
import Add from './add';

const Router = ({ currentRoute }) => {
  switch (true) {
    case currentRoute.root:
      return <Root />;
    case currentRoute.items:
      return <Items />;
    case currentRoute.add:
      return <Add />;
    default:
      return null;
  }
};

export default observer(Router);
