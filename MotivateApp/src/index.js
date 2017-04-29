import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Main from './components/Main';
import Rewards from './components/Rewards';
import Messaging from './components/Messaging';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';
import AddFriends from './components/AddFriends';

ReactDOM.render(
  (<BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/Home" component={Main} />
      <Route exact path="/Rewards" component={Rewards} />
      <Route exact path="/Account" component={Account} />
      <Route exact path="/CreateAccount" component={CreateAccount} />
      <Route exact path="/Messaging" component={Messaging} />
      <Route exact path="/AddFriends" component={AddFriends} />
    </div>
  </BrowserRouter>),
  document.getElementById('root')
);

