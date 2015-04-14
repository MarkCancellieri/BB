'use strict';

// Create a new controller middleware that is used to authorize authenticated operations
var requiresLogin = function(req, res, next) {
  // If a user is not authenticated, send the appropriate error message
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      message: 'User is not logged in'
    });
  }

  next();
};

module.exports = {
  requiresLogin:  requiresLogin
};