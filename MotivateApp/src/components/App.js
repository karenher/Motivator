import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from './Button';
import FormInput from './FormInput';

class App extends Component {
       // <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div>
        <Button />
        <FormInput textVal="Username" />
        <FormInput textVal="Password" />
      </div>
    );
  }
}

export default App;
