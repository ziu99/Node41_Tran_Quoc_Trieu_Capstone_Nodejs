const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  birth_day: Date,
  gender: String,
  role: String,
});

module.exports = mongoose.model('User', UserSchema);
