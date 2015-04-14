'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var User              = mongoose.model('User');
var utilities         = require('../../../lib/lib.utilities.js');
var sendJSONresponse  = utilities.sendJSONresponse;

// Create user
var createUser = function (req, res) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    provider: req.body.provider
  });
  newUser.save(function(err, user) {
    if (!err) {
      console.log('Saved user: ' + user._id);
      sendJSONresponse(res, 201, user);
    } else {
      console.dir(err);
      sendJSONresponse(res, 500, err);
    }
  });
};

module.exports = createUser;