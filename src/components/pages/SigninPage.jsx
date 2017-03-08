import React from 'react';
import {SingleLayout} from 'layout';
import SigninForm from 'modules/signin';

class SigninPage extends React.Component {
  render() {
    return (
      <SingleLayout>
        <div className="signin-content">
          <div className="main-form-content sigin-form-content">
            <SigninForm />
          </div>
        </div>
      </SingleLayout>
    );
  }
}

export default SigninPage;
