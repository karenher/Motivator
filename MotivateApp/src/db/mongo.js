var mongoose = require('mongoose');

var db = mongoose.connection;

var accountSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: {type: String, index: {unique: true, dropDups: true}},
  password: String,
  age: Number,
  goals: [{goal: String, how: String, public: Boolean}],
  friends: [String]
});

var currentUserSchema = new mongoose.Schema({
  username: String
}, {collection: 'current_user'});

module.exports = {account: mongoose.model('User_Accounts', accountSchema), user: mongoose.model('current_user', currentUserSchema)};
