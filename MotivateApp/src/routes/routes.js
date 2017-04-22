import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/App';
import Sample from '../components/Sample';


const Routes = (props) => (
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/extractData" component={Sample} />
  </BrowserRouter>
);

export default Routes;
