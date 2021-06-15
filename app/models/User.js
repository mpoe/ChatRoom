const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true},
  id: Number,
  password: String,
  created_date: Date,
  smUsername: String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;