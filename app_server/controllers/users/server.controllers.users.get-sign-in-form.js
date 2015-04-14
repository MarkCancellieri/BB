'use strict';

// Get sign-in form
var getSignInForm = function(req, res){
  // If user is not connected, render the signup page
  // Otherwise, redirect the user back to the main application page
  if (!req.user) {
    res.render('server.views.sign-in-form.hbs', {
      // Set the page title variable
      title: 'Sign-up Form',
      // Set the flash message variable
      messages: req.flash('error') || req.flash('info'),
      userFullName: req.user ? req.user.fullName : ''
    });
  } else {
    return res.redirect('/');
  }
};

module.exports = getSignInForm;
