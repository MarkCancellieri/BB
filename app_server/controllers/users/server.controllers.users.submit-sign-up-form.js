'use strict';

// Module dependencies
var request = require('request');
var apiOptions = require('../../../config/config').apiOptions;

// Submit sign-up form to register a new user
var submitSignUpForm = function(req, res) {
  if (!req.user) {
    var path = '/api/users';
    var newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      provider: 'local'
    };
    var requestOptions = {
      url: apiOptions.server + path,
      method: 'POST',
      json: newUser
    };
    request(requestOptions, function (err, response, user) {
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
    });
  } else {
    // Redirect the user back to the main application page
    return res.redirect('/');
  }
};

module.exports = submitSignUpForm;
