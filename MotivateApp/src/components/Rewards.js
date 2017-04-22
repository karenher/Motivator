import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormSubmit from './FormSubmit';

class Rewards extends Component {
  render() {
    return (
      <div>
        <Link to="/main">Main Page</Link>
        <Link to="/rewards">Rewards Page</Link>
        <Link to="/messaging">Messages</Link>
        <FormSubmit list={["Goal", "Reward Description"]} />
      </div>
    );
  }
}

export default Rewards;
