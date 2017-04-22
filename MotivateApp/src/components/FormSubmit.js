import React, { Component } from 'react';
import axios from 'axios';
var port = 9000;
var apiBaseUrl2 = 'http://localhost:' + port + '/api/getData3';

class FormSubmit extends Component {
  constructor(props) {
    super(props);
    var obj = {};
    for (var i = 0; i < this.props.list.length; i++) {
      obj[this.props.list[i]] = '';
    }
    this.state = obj;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(event) {
    if (this.props.message === 'main') {
      axios.post(apiBaseUrl2, {first_name: this.state['a'], last_name: this.state['b'], age: 21, gender: 'Female'}).then(function(res) {console.log('new user saved');});
    }

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
  console.log(this.state);
    var inputs = new Array();
    for (var i = 0; i < this.props.list.length; i++) {
      inputs.push(<input type="text" name={this.props.list[i]} value={this.state[this.props.list[i]]} />);
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          {inputs}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default FormSubmit;
