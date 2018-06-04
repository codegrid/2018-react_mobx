import React from 'react';
import { observer } from 'mobx-react';

const NavLink = ({ store }) => (
  <nav className="menu">
    <a href="#/" className={store.currentRoute.root ? 'router-link-active' : ''}>最新</a>
    <a href="#/items" className={store.currentRoute.items ? 'router-link-active' : ''}>一覧</a>
    <a href="#/add" className={store.currentRoute.add ? 'router-link-active' : ''}>追加</a>
  </nav>
);

export default observer(NavLink);
