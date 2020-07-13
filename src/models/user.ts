const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  login: {type: String},
  password: {type: String},
  avatar: {type: String}
});


export = mongoose.model('user', userSchema)