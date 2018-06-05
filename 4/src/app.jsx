import React from 'react';
import { observer, inject } from 'mobx-react';
import NavLink from './component/nav-link';
import RouterContent from './page/router-content';

class App extends React.Component {
  render() {
    const { currentRoute, err } = this.props.ui;

    if (err !== null) {
      return <div>Unknown error!</div>;
    }

    return (
      <React.Fragment>
        <NavLink currentRoute={currentRoute} />
        <div className="contents">
          <RouterContent currentRoute={currentRoute} />
        </div>
      </React.Fragment>
    );
  }

  componentDidCatch(err, info) {
    const { ui } = this.props;
    ui.setError(err);
    console.error(err, info);
  }
}

export default inject('ui')(observer(App));
