'use strict';

// Module dependencies
var passport  = require('passport');

// Submit sign-in form
var signIn = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.dir(err);
      res.status(500).json(err);
    }

    if (user) {
      res.status(200).json({
        _id:        user._id,
        firstName:  user.firstName,
        lastName:   user.lastName,
        fullName:   user.fullName,
        username:   user.username,
        created:    user.created
      });
    }

  });
};

module.exports = signIn;
