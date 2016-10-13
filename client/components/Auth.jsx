import React from 'react';
import { Link } from 'react-router'
import request from 'superagent';
import cookie from 'react-cookie';
import CMS from './CMS.jsx';
import AdminForm from './admin/adminForm.jsx';
console.log('from auth form');

const propTypes = {};

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
    }
  }
  signOut() {
    request.post('/auth/signout')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(adminDetails) {
    request.post('/auth/login')
          .send(adminDetails)
         .then(() => {
           this.updateAuth();
         });
  }
  signUp(adminDetails) {
    console.log(adminDetails);
    request.post('/auth/signup')
          .send(adminDetails)
          .then(() => {
            this.updateAuth();
          });
  }
  render() {
    let adminDisplayElement;
    if (this.state.token) {
      adminDisplayElement = (
        <div className="adminForm">
          <p className="UGCGreetingSub">Welcome SSS™ Admin!</p>
          <button onClick={this.signOut} >Log-Out!</button>
          <CMS />
        </div>
      );
    } else {
      adminDisplayElement = (
        <div className="adminForm">
          <p>Admin authorization</p>
          <AdminForm handleSubmit={this.signUp} buttonText="Sign-Up" />
          <AdminForm handleSubmit={this.logIn} buttonText="Log-In" />
        </div>
      );
    }
    return (
      <div>
        {adminDisplayElement}

        <div className='AdminButtonContainer'>
          <button>
          <Link to="/">
            Back Home
          </Link>
          </button>
        </div>
      </div>
    );
  }
}

Auth.propTypes = propTypes;

export default Auth;
