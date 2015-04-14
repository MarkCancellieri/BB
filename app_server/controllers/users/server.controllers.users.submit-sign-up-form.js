'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

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

// Submit sign-up form to register a new user
var submitSignUpForm = function(req, res) {
  if (!req.user) {
    var path, requestOptions, newUser;
    path = '/api/users';
    newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      provider: 'local'
    };
    requestOptions = {
      url: apiOptions.server + path,
      method: "POST",
      json: newUser
    };
    request(
      requestOptions,
      function (err, response, user) {
        if (err) {
          console.dir(err);
        } else {
          // If the user was created successfully use the Passport 'login' method to login
          req.login(user, function(err) {
            if (err) return next(err);

            // Redirect the user back to the main application page
            return res.redirect('/');
          });
        }
      }
    );
  } else {
  }
};

module.exports = submitSignUpForm;
