var mongoose = require('mongoose');

var db = mongoose.connection;

  //user_id: {type: Number, unique: true, index: true},
var accountSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  gender: String
});

module.exports = mongoose.model('User_Accounts', accountSchema);
