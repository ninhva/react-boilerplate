import React from 'react';
import {MasterLayout} from 'layout';
import Home from 'modules/home';

class HomePage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <Home />
      </MasterLayout>
    );
  }
}

export default HomePage;