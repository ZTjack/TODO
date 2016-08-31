import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

import TestIndex from './components/test/testIndex';

export default (
    <Route breadcrumbName="home" path="/" component={App}>
        <Route path="test" component={TestIndex}/>
    </Route>
);
  