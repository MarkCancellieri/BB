'use strict';

// Create a new controller method for signing out
var signOut = function(req, res) {
  // Use the Passport 'logout' method to logout
  req.logout();

  // Redirect the user back to the main application page
  res.redirect('/');
};

module.exports = signOut;
