import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
var port = 9000;
var apiBaseUrl = 'http://localhost:' + port + '/api/loginInfo';
var apiBaseUrl1 = 'http://localhost:' + port + '/api/login';
var apiBaseUrl2 = 'http://localhost:' + port + '/api/getAccount';
var apiBaseUrl3 = 'http://localhost:' + port + '/api/createGoals';
var apiBaseUrl4 = 'http://localhost:' + port + '/api/addFriend';


class FormSubmit extends Component {
  constructor(props) {
    super(props);
    var obj = {};
    for (var i in this.props.list) {
      obj[i] = '';
    }
    obj['redirect'] = false;
    obj['redirectPage'] = 'Home'
    this.state = obj;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    if (this.props.message === 'newAccount') {
      var username = this.state['Username'];
      var password = this.state['Password'];
      var verifypassword = this.state['Password'];
      var f_name = this.state['First Name'];
      var l_name = this.state['Last Name'];
      var age = Number(this.state['Age']);
      if (username === '' || password === '' || verifypassword === '' || f_name === '' || l_name === '' || age === '') {
        console.log('All inputs must be filled');
      }
      else if (password === verifypassword) {
        axios
          .post(apiBaseUrl2, {username: username, password: password, first_name: f_name, last_name: l_name, age: age})
          .then(function(res) {
            self.setState({
              redirect: true
            });
          })
          .catch(function(error) {
            console.log('This username already exists');
          });
        }
    }
    else if (this.props.message === 'login') {
      var username = this.state['Username'];
      var password = this.state['Password'];
      if (username === '' || password === '') {
        console.log('All inputs must be filled');
      } else {
        axios
          .get(apiBaseUrl)
          .then(function(res) {
            console.log(res);
            var data = res.data;
            for (var i = 0; i < data['rows'].length; i++) {
              if (username === data['rows'][i]['username'] && password === data['rows'][i]['password']) {
                axios
                  .post(apiBaseUrl1, {username: username})
                  .then(function(res) {
                    self.setState({
                      redirect: true
                    });
                  });
              }
            }
          })
          .catch(function(error) {
            console.log('This username does not exist');
          });
      }
    }
    if (this.props.message === 'createGoal') {
      var goal = this.state['Create a new goal'];
      var how = this.state['How to reach goal'];
      var publicShow = this.state['Want to make this public?'] === 'y' ? true : false;
      if (goal === '' || how === '' || publicShow === '') {
        console.log('All inputs must be filled');
      } else {
        axios
          .get(apiBaseUrl1)
          .then(function(res) {
            var data = res.data;
            var user = data['rows'][0]['username'];
            axios
              .post(apiBaseUrl3, {username: user, newgoal: {goal: goal, how: how, public: publicShow}})
              .then(function(res) {
              });
          });
      }
    }
    if (this.props.message === 'addFriend') {
      var friendusername = this.state['Add Friend'];
      if (friendusername === '') {
        console.log('Input must be filled');
      } else {
        axios
          .get(apiBaseUrl)
          .then(function(res) {
            var data = res.data;
            for (var i = 0; i < data['rows'].length; i++) {
              if (friendusername === data['rows'][i]['username']) {
                axios
                  .get(apiBaseUrl1)
                  .then(function(res) {
                   var data1 = res.data;
                   var user = data1['rows'][0]['username'];
                   axios
                     .post(apiBaseUrl4, {username: user, friend: friendusername})
                     .then(function(res) {
                       
                     });
                  });
              }
            }
          });
      }
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    if (this.state.redirect && this.state.redirectPage === 'Home') {
      return (<Redirect to='/Home'/>);
    }
    var inputs = new Array();
    for (var i in this.props.list) {
      if (this.props.list[i] === 'box') {
        inputs.push(<tr><td>{i}: </td><td><input type="text" name={i} value={this.state[i]} /></td></tr>);
      } else if (this.props.list[i] === 'area') {
        inputs.push(<tr><td>{i}: </td><td><textarea name={i} value={this.state[i]} /></td></tr>);
      }
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <table>
            {inputs}
          </table>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default FormSubmit;
