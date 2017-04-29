import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Menuitem } from 'react-bootstrap';
import s from '../style/style.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Motivator
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}><Link to="/Home" className="links">Home</Link></NavItem>
            <NavItem eventKey={2}><Link to="/AddFriends" className="links">Add Friends</Link></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
