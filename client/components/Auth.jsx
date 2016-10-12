// import React from 'react';
// import request from 'superagent';
// import cookie from 'react-cookie';
// import AdminForm from './admin/adminForm.jsx';
// console.log('from auth form');
//
// class Auth extends React.Component {
//   constructor() {
//     super();
//     this.state = { questions: [] };
//     this.logIn = this.logIn.bind(this);
//     this.signUp = this.signUp.bind(this);
//     this.signOut = this.signOut.bind(this);
//     this.getAllAdminQuestions = this.getAllAdminQuestions.bind(this);
//   }
//
//   render() {
//     return (
//       <div>poop</div>
//     );
//   }
// }
//   export default Auth;



import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
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
    this.getAllAdminQuestions = this.getAllAdminQuestions.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
      this.getAllAdminQuestions();
    }
  }

  getAllAdminQuestions() {
    request.get('/api/questions')
           .then((response) => {
             const questions = response.body;
             this.setState({ questions });
           })
           .catch(() => {
             this.updateAuth();
           });
  }
// changed api to auth, also in app.jsx
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
           this.getAllAdminQuestions();
         });
  }
  signUp(adminDetails) {
    console.log(adminDetails);
    request.post('/auth/signup')
          .send(adminDetails)
          .then(() => {
            this.updateAuth();
            // this.getAllAdminQuestions();
          });
  }
  render() {
    let adminDisplayElement;
    if (this.state.token) {
      adminDisplayElement = (
        <div>
        <p>testss</p>
          <button onClick={this.signOut} >Log-Out!</button>
        </div>
      );
    } else {
      adminDisplayElement = (
        <div>
        <p>testss</p>
          <AdminForm handleSubmit={this.signUp} buttonText="Sign-Up" />
          <AdminForm handleSubmit={this.logIn} buttonText="Log-In" />
        </div>
      );
    }
    return (
      <div>
        {adminDisplayElement}
      </div>
    );
  }
}

Auth.propTypes = propTypes;

export default Auth;
