import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormSubmit from './FormSubmit';
import { Navbar, Nav, NavItem, Menuitem, Panel } from 'react-bootstrap';


class CreateAccount extends Component {
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
        <h1>Create Account</h1>
        <FormSubmit message="newAccount" verifyP={true} list={{Username: 'box', Password: 'box', 'Verify Password': 'box', 'First Name': 'box', 'Last Name': 'box', Age: 'box'}} />
        </Panel>
        </center>
      </div>
    );
  }
}

export default CreateAccount;
