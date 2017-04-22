import React, { Component } from 'react';
import axios from 'axios';
//import port from '../server/index';
const port = 9000;
const apiBaseUrl = 'http://localhost:' + port + '/api/getData'; 
const apiBaseUrl2 = 'http://localhost:' + port + '/api/getData3'; 

class Sample extends Component {
  componentDidMount() {
/*
    superagent.get(apiBaseUrl).query('null').set('Accept', 'application/json').end((err, res) => {
      if (err) console.log('error occurred');
      else {
        var data = res.body;
console.log(JSON.stringify(res.body));
          console.log(data['rows'] + '\n');
        for (var i = 0; i < data['rows'].length; i++) {
//          for (var j in i) {
//            console.log(i + ' ' + i[j]);
//          }
// console.log(data['rows'][i]);
  var dataVal = data['rows'][i];
            console.log(dataVal['DATE'] + ' ' + dataVal['DGS10']);
	}
      }
    });
*/

   // axios.get(apiBaseUrl).then(function(res) {console.log(JSON.stringify(res.data));});
    axios.post(apiBaseUrl2, {first_name: 'Ya', last_name: 'Tor', age: 21, gender: 'Female'}).then(function(res) {console.log('new user saved');});
  }

  render() {
    return (
      <div>
<h1>hi</h1>
      </div>
    );
  }
}

export default Sample;
