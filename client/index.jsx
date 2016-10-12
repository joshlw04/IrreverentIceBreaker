//Why do we have two a react router component as well as index.jsx?
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import CMS from './components/CMS.jsx';

ReactDOM.render((
  <Router history={hashHistory} >
    <App path="/" component={App} />
    <CMS path="/loggedIn" component={CMS} />
  </Router>
), document.querySelector('#root'));
