import React, { Component } from 'react';
import Navigation from './Navigation';
import FormSubmit from './FormSubmit';
import { Panel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const goalUrl = 'http://localhost:9000/api/getGoals';
const baseUrl1 = 'http://localhost:9000/api/login';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      goals: [],
      friends: [],
      allGoals: [],
      friendGoals: [] 
    }
  }

  componentWillMount() {
    var self = this;
    axios
      .get(baseUrl1)
      .then(function(res) {
        var data = res.data;
        var user = data['rows'][0]['username'];
        var friends = new Array();
        var allGoals = new Array();
        var goals = new Array();
        var friendGoals = new Array();
        axios.get(goalUrl).then(function(res) {
          var data1 = res.data;
          for (var i = 0; i < data1['rows'].length; i++) {
            allGoals.push({username: data1['rows'][i]['username'], goals: data1['rows'][i]['goals']});
            if (user === data1['rows'][i]['username']) {
              for (var j = 0; j < data1['rows'][i]['goals'].length; j++) {
                var singleGoal = {goal: data1['rows'][i]['goals'][j]['goal'], how: data1['rows'][i]['goals'][j]['how']};
                goals.push(singleGoal);
              }
              for (var j = 0; j < data1['rows'][i]['friends'].length; j++) {
                friends.push(data1['rows'][i]['friends'][j]);
              }
            }
          }
          for (var i = 0; i < allGoals.length; i++) {
            var fGoal = new Array();
            if (friends.indexOf(allGoals[i]['username']) > -1 && allGoals[i]['goals'].length > 0) {
              fGoal.push(allGoals[i]['username']);
              for (var j = 0; j < allGoals[i]['goals'].length; j++) {
                if (allGoals[i]['goals'][j]['public']) {
                  fGoal.push(allGoals[i]['goals'][j]);
                }
              }
              friendGoals.push(fGoal);
            }
          }
          self.setState({goals: goals, user: user, friends: friends, allGoals: allGoals, friendGoals: friendGoals});
        });
    });
  }

  render() {
    var goals = new Array();
    var friendGoals = new Array();
    for (var i = 0; i < this.state.goals.length; i++) {
      goals.push(<Panel key={i}><div>Goal: {this.state.goals[i]['goal']}</div><div>How to reach goal: {this.state.goals[i]['how']}</div></Panel>);
    }
    for (var i = 0; i < this.state.friendGoals.length; i++) {
      for (var j = 0; j < this.state.friendGoals[i].length; j++) {
        friendGoals.push(<Panel key={i + ':' + j}><div>Username: {this.state.friendGoals[i][0]}</div><div>Goal: {this.state.friendGoals[i][j]['goal']}</div><div>How to reach goal: {this.state.friendGoals[i][j]['how']}</div></Panel>);
      }
    }
    return (
      <div>
        <Navigation />
        <table style={{width: '90%', marginLeft: '2%'}}>
        <tr>
        <td>
        <Panel style={{width: '700px'}}>
          Personal Goals
          {goals}
        </Panel>
        </td>
        <td>
        <Panel style={{width: '300px'}}>
          Friends' Goals
          {friendGoals}
        </Panel>
        </td>
        </tr>
        </table>
        <center>
        <Panel style={{width: '35%', marginTop: '20%'}}>
          <FormSubmit message="createGoal" list={{'Create a new goal': 'area', 'How to reach goal': 'area', 'Want to make this public?': 'box'}}/>
        </Panel>
        </center>
      </div>
    );
  }
}

export default Main;
