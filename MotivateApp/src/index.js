import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Sample from './components/Sample';
import Main from './components/Main';
import Rewards from './components/Rewards';
import Messaging from './components/Messaging';
import Account from './components/Account';

ReactDOM.render(
  (<BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/sample" component={Sample} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/rewards" component={Rewards} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/messaging" component={Messaging} />
    </div>
  </BrowserRouter>),
  document.getElementById('root')
);

