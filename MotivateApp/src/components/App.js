import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormSubmit from './FormSubmit';
import { Navbar, Nav, NavItem, Menuitem, Panel } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Motivator
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <center>
        <Panel style={{height: '400px', width: '350px'}}>
        <h1>Login</h1>
        <FormSubmit message="login" list={{Username: 'box', Password: 'box'}} />
        <div><Link to="/CreateAccount" className="links">Don't have an account? Sign up</Link></div>
        </Panel>
        </center>
      </div>
    );
  }
}

export default App;
