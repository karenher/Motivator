const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('../db/mongo.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname + '/../../build')));

app.post('/api/getData3', function(req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) throw err;
    console.log('saving new user data');
  });
  createUser();
  createUser();
  createUser();
});

mongoose.connect('mongodb://54.191.220.231:27017/user_accounts', function(err) {
  if (err) {
    console.log('error in connecting');
    throw err;
  }
  console.log('mongodb connecting');
  //1 = connected, 2 = connecting, 3 = disconnection, 0 = disconnected
  console.log(mongoose.connection.readyState);
});

function createUser() {
  var user = new User({
    first_name: 'Patty',
    last_name: 'Cake',
    age: 25,
    gender: 'Female'
  });
  user.save(function (err) {
    if (err) throw err;
    console.log('saving');
  });

  User.find(function (err, data) {
    if (err) return err;
    else {
      console.log(data);
    }
  });
}

app.get('*', (req, res) => {
 console.log('----------------first app get');
  res.sendFile(path.resolve(__dirname + '/../../build', 'index.html'));
});

module.exports = app;
