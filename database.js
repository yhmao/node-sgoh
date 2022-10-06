var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/sgoh';
var database = mongoose.connect(url);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {type:String, default: 'user'},
  created: {type: Date, default: Date.now}
});
const User = mongoose.model('User', userSchema);

const recordSchema = new mongoose.Schema({
  user: {type:String,default:'user'},
  date: {type:Date, default:Date.now},
  dateUpdate: {type:Date, default:Date.now},
  project: {type: String, default:'SGOH'},
  profession: String,
  region: String,
  text: String,
  file: {type:String, default: ''},
  caption: String,
  parents: [],
  children: []
});
const Record = mongoose.model('Record', recordSchema);
const Comment = mongoose.model('Comment', recordSchema);

const zoneSchema = new mongoose.Schema({
  user: {type:String, default:''},
  userUpdate:{type:String, default:''},
  date: {type:Date, default:Date.now},
  dateUpdate: {type:Date, default:Date.now},
  zoneCode: String,
  zoneDescription: String,
});
const Zone = mongoose.model('Zone',zoneSchema);



module.exports = {
  database:database,
  User:User,
  Record:Record,
  Comment:Comment,
  Zone:Zone
};
console.log('database.js.');
