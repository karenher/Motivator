import React, { Component } from 'react';
import Navigation from './Navigation';
import FormSubmit from './FormSubmit';
import { Panel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const urlAddFriends = 'http://localhost:9000/addFriend';

class AddFriends extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <center>
          <Panel style={{width: '50%'}}>
            <FormSubmit message="addFriend" list={{'Add Friend': 'box'}}/>
          </Panel>
        </center>
      </div>
    );
  }
}

export default AddFriends;
