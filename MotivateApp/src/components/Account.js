import React, { Component } from 'react';
import Navigation from './Navigation';
import FormSubmit from './FormSubmit';
import { Panel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const goalUrl = 'http://localhost:9000/getGoals';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: ''
    }
  }

  componentWillMount() {
    var self = this;
    axios.get(goalUrl).then(function(res) {
      var goals = new Array();
      var data = res.data;
      for (var i = 0; i < data['rows'].length; i++) {
        for (var j = 0; j < data['rows'][i]['goals'].length; j++) {
          var singleGoal = {goal: data['rows'][i]['goals'][j]['goal'], date: data['rows'][i]['goals'][j]['date']};
 console.log(singleGoal);
          goals.push(singleGoal);
        }
      }
      console.log(goals);
      self.setState({goals: goals});
    });
  }

  render() {
    var goals = new Array();
  console.log(this.state.goals);
    for (var i = 0; i < this.state.goals.length; i++) {
      goals.push(<div key={i}>{this.state.goals[i]['goal']}</div>);
    }
    return (
      <div>
        <Navigation />
        <Panel style={{width: '75%', marginLeft: '2%'}}>
          Personal Goals
          {goals}
        </Panel>
        <Panel style={{width: '10%', marginLeft: '80%', marginTop: '-10px'}}>
          Friends' Goals
        </Panel>
        <FormSubmit message="main" list={{'Create a new goal': 'area'}}/>
      </div>
    );
  }
}

export default Account;
