import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
export default App;