'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var User              = mongoose.model('User');

// TODO: Need to use this function
// Create a new error handling controller method
var getErrorMessage = function(err) {
  var message = '';

  // If an internal MongoDB error occurs, get the error message
  if (err.code) {
    switch (err.code) {
      // If a unique index error occurs set the message error
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      // If a general error occurs set the message error
      default:
        message = 'Something went wrong';
    }
  } else {
    // Grab the first error message from a list of possible errors
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  // Return the message error
  return message;
};

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
      res.status(201).json(user);
    } else {
      console.dir(err);
      res.status(500).json(err);
    }
  });
};

module.exports = createUser;
