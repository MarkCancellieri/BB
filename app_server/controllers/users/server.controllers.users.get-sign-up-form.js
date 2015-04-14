'use strict';

// Get sign-up form
var getSignUpForm = function(req, res){
  // If user is not connected, render the sign-up page
  // Otherwise, redirect the user back to the main application page
  if (!req.user) {
    // Use the 'response' object to render the signup page
    res.render('server.views.sign-up-form.hbs', {
      // Set the page title variable
      title: 'Sign-up Form',
      // Set the flash message variable
      messages: req.flash('error'),
      userFullName: req.user ? req.user.fullName : ''
    });
  } else {
    return res.redirect('/');
  }
};

module.exports = getSignUpForm;
