import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import adminForm from './admins/adminForm.jsx';

const propTypes = {};

class App extends React.Component {
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

  signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(adminDetails) {
    request.post('/api/login')
          .send(adminDetails)
         .then(() => {
           this.updateAuth();
           this.getAllAdminQuestions();
         });
  }
  signUp(adminDetails) {
    request.post('/api/signup')
          .send(adminDetails)
          .then(() => {
            this.updateAuth();
            this.getAllAdminQuestions();
          });
  }
  render() {
    let adminDisplayElement;
    if (this.state.token) {
      adminDisplayElement = (
        <div>
          <button onClick={this.signOut} >Log-Out!</button>

        </div>
      );
    } else {
      adminDisplayElement = (
        <div>
          <adminForm handleSubmit={this.signUp} buttonText="Sign-Up" />
          <adminForm handleSubmit={this.logIn} buttonText="Log-In" />
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

App.propTypes = propTypes;

export default App;
