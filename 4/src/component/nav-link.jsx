import React from 'react';
import { observer } from 'mobx-react';

const NavLink = ({ ui }) => (
  <nav className="menu">
    <a href="#/" className={ui.currentRoute.root ? 'router-link-active' : ''}>最新</a>
    <a href="#/items" className={ui.currentRoute.items ? 'router-link-active' : ''}>一覧</a>
    <a href="#/add" className={ui.currentRoute.add ? 'router-link-active' : ''}>追加</a>
  </nav>
);

export default observer(NavLink);
