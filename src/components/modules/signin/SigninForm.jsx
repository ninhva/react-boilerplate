import React from 'react';

class SigninForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <form role="form" className="main-form">
        <h2 className="title-form">Sign In</h2>
      </form>
    );
  }
}

export default SigninForm;
