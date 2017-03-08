import React from 'react';
import Header from 'layout/partials/Header.jsx';

class SingleLayout extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="wrapper-container">
        <Header/>
        <main className="main-container">
          {childrenWithProps}
        </main>
      </div>
    );
  }
}

export default SingleLayout;
