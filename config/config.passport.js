'use strict';

// Module dependencies
var passport  = require('passport');
var mongoose  = require('mongoose');

// Define the Passport configuration method
module.exports = function() {
  var User = mongoose.model('User');

  // Use Passport's 'serializeUser' method to serialize the user id
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Use Passport's 'deserializeUser' method to load the user document
  passport.deserializeUser(function(id, done) {
    User.findOne({_id: id}, '-password -salt', function(err, user) {
      done(err, user);
    });
  });

  // Load Passport's strategies configuration files
  require('./strategies/config.strategies.local.js')();
};
