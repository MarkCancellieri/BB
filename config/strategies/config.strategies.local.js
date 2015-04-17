'use strict';

// Module dependencies
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User          = require('mongoose').model('User');

// Create the Local strategy configuration method
module.exports = function() {
  passport.use(new LocalStrategy(function(username, password, done) {
    // Use the 'User' model 'findOne' method to find a user with the current username
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, {message: 'Unknown user'});
      }

      if (!user.authenticate(password)) {
        return done(null, false, {message: 'Invalid password'});
      }

      // If everything is okay, pass the user object to the next middleware
      return done(null, user);
    });
  }));
};
