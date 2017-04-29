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

app.post('/api/getAccount', function(req, res) {
  var user = new User['account'](req.body);
  user.save(function (err) {
    if (err) return err;
    console.log('saving new user data');
    res.send('working');
  });
});
app.get('/api/loginInfo', function(req, res) {
  User['account'].find({}, 'username password', function (err, data) {
    if (err) {
      console.log('Error');
      return err;
    } else {
      res.send({rows: data});
    }
  });
});
app.post('/api/login', function(req, res) {
  User['user'].remove({}, function (err) {
    if (err) return err;
    console.log('current_user collection empty');
  });
  var user = new User['user'](req.body);
  user.save(function (err) {
    if (err) return err;
    console.log('saving user');
    res.send('working');
  });
});
app.get('/api/login', function(req, res) {
  User['user'].find({}, 'username', function (err, data) {
    if (err) {
      console.log('Error');
      return err;
    } else {
      res.send({rows: data});
    }
  });
});
app.post('/api/createGoals', function(req, res) {
  console.log(req.body['username']); 
  console.log(req.body['newgoal']); 
  User['account'].update({username: req.body['username']}, {$push: {'goals': req.body['newgoal']}}, {upsert: true}, function (err, data) {
    res.send('working');
  });
});
app.post('/api/addFriend', function(req, res) {
  console.log(req.body['username']); 
  console.log(req.body['friend']); 
  User['account'].update({username: req.body['username']}, {$push: {'friends': req.body['friend']}}, {upsert: true}, function (err, data) {
    res.send('working');
  });
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

app.get('/api/getGoals', function(req, res) {
  User['account'].find({}, function (err, data) {
    if (err) return err;
    else {
      res.send({rows: data});
    }
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../../build', 'index.html'));
});

module.exports = app;
