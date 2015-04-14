'use strict';

// Module dependencies
var passport  = require('passport');

// Submit sign-in form
var submitSignInForm = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/signin',
  failureFlash: true
});

module.exports = submitSignInForm;
