console.log('from router.jsx');

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App.jsx';
import Auth from '../Auth.jsx';
import CMS from '../CMS.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/admin" component={Auth} />
      <Route path="/cms" component={CMS} />
    </Router>
  );
}

export default Routes;

