console.log('from router.jsx');

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App.jsx';
import Auth from '../Auth.jsx';
import CMS from '../CMS.jsx';
import UserGeneratedContent from '../userGeneratedContent.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/admin" component={Auth} />
      <Route path="/ugc" component={UserGeneratedContent} />
    </Router>
  );
}

export default Routes;

