import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

import TODO from './components/todo/index';

export default (
    <Route breadcrumbName="home" path="/" component={App}>
      <IndexRoute component={TODO}/>
    </Route>
);
  